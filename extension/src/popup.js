class TikTokExtension {
  constructor() {
    this.accounts = [];
    this.serverUrl = '';
    this.autoUpload = false;
    this.init();
  }

  async init() {
    await this.loadSettings();
    await this.loadAccounts();
    this.bindEvents();
    this.renderAccounts();
  }

  async loadSettings() {
    const result = await chrome.storage.sync.get(['serverUrl', 'autoUpload']);
    this.serverUrl = result.serverUrl || 'http://localhost:3001/api/v1';
    this.autoUpload = result.autoUpload || false;
    
    document.getElementById('server-url').value = this.serverUrl;
    document.getElementById('auto-upload').checked = this.autoUpload;
  }

  async loadAccounts() {
    const result = await chrome.storage.local.get(['accounts']);
    this.accounts = result.accounts || [];
  }

  async saveSettings() {
    await chrome.storage.sync.set({
      serverUrl: this.serverUrl,
      autoUpload: this.autoUpload
    });
  }

  async saveAccounts() {
    await chrome.storage.local.set({ accounts: this.accounts });
  }

  bindEvents() {
    document.getElementById('detect-btn').addEventListener('click', () => {
      this.detectAccount();
    });

    document.getElementById('upload-btn').addEventListener('click', () => {
      this.uploadAccounts();
    });

    document.getElementById('server-url').addEventListener('change', (e) => {
      this.serverUrl = e.target.value;
      this.saveSettings();
    });

    document.getElementById('auto-upload').addEventListener('change', (e) => {
      this.autoUpload = e.target.checked;
      this.saveSettings();
    });
  }

  async detectAccount() {
    this.showLoading(true);
    
    try {
      // 获取当前标签页
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      if (!tab.url.includes('tiktok.com')) {
        this.showNotification('请在 TikTok 页面使用此功能', 'error');
        return;
      }

      // 获取 Cookie
      const cookies = await this.getTikTokCookies();
      
      if (cookies.length === 0) {
        this.showNotification('未检测到 TikTok Cookie，请先登录', 'error');
        return;
      }

      // 获取用户信息
      const userInfo = await this.getUserInfo(tab.id);
      
      if (!userInfo) {
        this.showNotification('无法获取用户信息，请确保已登录', 'error');
        return;
      }

      // 创建账号对象
      const account = {
        id: this.generateId(),
        name: userInfo.displayName || userInfo.username || '未知用户',
        username: userInfo.username || '',
        cookies: cookies,
        userAgent: navigator.userAgent,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        detectedAt: new Date().toISOString(),
        uploaded: false,
        valid: true
      };

      // 检查是否已存在
      const existingIndex = this.accounts.findIndex(acc => 
        acc.username === account.username || 
        JSON.stringify(acc.cookies) === JSON.stringify(account.cookies)
      );

      if (existingIndex >= 0) {
        this.accounts[existingIndex] = account;
        this.showNotification('账号信息已更新', 'success');
      } else {
        this.accounts.push(account);
        this.showNotification('账号检测成功', 'success');
      }

      await this.saveAccounts();
      this.renderAccounts();

      // 自动上传
      if (this.autoUpload) {
        setTimeout(() => this.uploadAccounts(), 1000);
      }

    } catch (error) {
      console.error('检测账号失败:', error);
      this.showNotification('检测失败: ' + error.message, 'error');
    } finally {
      this.showLoading(false);
    }
  }

  async getTikTokCookies() {
    return new Promise((resolve) => {
      chrome.cookies.getAll({ domain: '.tiktok.com' }, (cookies) => {
        const filteredCookies = cookies
          .filter(cookie => 
            ['sessionid', 'csrf_token', 'uid_tt', 'sid_tt', 'passport_csrf_token'].includes(cookie.name)
          )
          .map(cookie => ({
            name: cookie.name,
            value: cookie.value,
            domain: cookie.domain,
            path: cookie.path,
            secure: cookie.secure,
            httpOnly: cookie.httpOnly,
            expirationDate: cookie.expirationDate
          }));
        resolve(filteredCookies);
      });
    });
  }

  async getUserInfo(tabId) {
    try {
      const results = await chrome.scripting.executeScript({
        target: { tabId },
        function: () => {
          // 尝试从页面中提取用户信息
          const userInfo = {};
          
          // 方法1: 从 URL 提取
          const urlMatch = window.location.pathname.match(/@([^/]+)/);
          if (urlMatch) {
            userInfo.username = urlMatch[1];
          }

          // 方法2: 从页面元素提取
          const profileLink = document.querySelector('[data-e2e="profile-icon"]');
          if (profileLink) {
            const href = profileLink.getAttribute('href');
            const match = href?.match(/@([^/]+)/);
            if (match) {
              userInfo.username = match[1];
            }
          }

          // 方法3: 从标题提取
          const titleMatch = document.title.match(/^(.+?)\s*\(@([^)]+)\)/);
          if (titleMatch) {
            userInfo.displayName = titleMatch[1];
            userInfo.username = titleMatch[2];
          }

          // 方法4: 从 meta 标签提取
          const metaTitle = document.querySelector('meta[property="og:title"]');
          if (metaTitle) {
            const content = metaTitle.getAttribute('content');
            const match = content?.match(/^(.+?)\s*\(@([^)]+)\)/);
            if (match) {
              userInfo.displayName = match[1];
              userInfo.username = match[2];
            }
          }

          return userInfo;
        }
      });

      return results[0]?.result || null;
    } catch (error) {
      console.error('获取用户信息失败:', error);
      return null;
    }
  }

  async uploadAccounts() {
    if (this.accounts.length === 0) {
      this.showNotification('没有可上传的账号', 'error');
      return;
    }

    if (!this.serverUrl) {
      this.showNotification('请先设置服务器地址', 'error');
      return;
    }

    this.showLoading(true);
    let successCount = 0;
    let errorCount = 0;

    for (const account of this.accounts) {
      if (account.uploaded) continue;

      try {
        const response = await fetch(`${this.serverUrl}/accounts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: account.name,
            username: account.username,
            encrypted_session: JSON.stringify(account.cookies),
            user_agent: account.userAgent,
            language: account.language,
            timezone: account.timezone,
            expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
          })
        });

        if (response.ok) {
          account.uploaded = true;
          account.uploadedAt = new Date().toISOString();
          successCount++;
        } else {
          const error = await response.text();
          console.error('上传失败:', error);
          errorCount++;
        }
      } catch (error) {
        console.error('上传账号失败:', error);
        errorCount++;
      }
    }

    await this.saveAccounts();
    this.renderAccounts();
    this.showLoading(false);

    if (successCount > 0) {
      this.showNotification(`成功上传 ${successCount} 个账号`, 'success');
    }
    if (errorCount > 0) {
      this.showNotification(`${errorCount} 个账号上传失败`, 'error');
    }
  }

  renderAccounts() {
    const container = document.getElementById('account-list');
    const emptyState = document.getElementById('empty-state');
    const uploadBtn = document.getElementById('upload-btn');

    if (this.accounts.length === 0) {
      container.innerHTML = '';
      emptyState.style.display = 'block';
      uploadBtn.disabled = true;
      return;
    }

    emptyState.style.display = 'none';
    uploadBtn.disabled = false;

    container.innerHTML = this.accounts.map(account => {
      const detectedTime = new Date(account.detectedAt);
      const isExpiringSoon = account.cookies.some(cookie => 
        cookie.expirationDate && 
        (cookie.expirationDate * 1000 - Date.now()) < 3 * 24 * 60 * 60 * 1000
      );

      let statusClass = 'status-valid';
      let statusText = '有效';
      let itemClass = '';

      if (!account.valid) {
        statusClass = 'status-expired';
        statusText = '已失效';
        itemClass = 'expired';
      } else if (isExpiringSoon) {
        statusClass = 'status-warning';
        statusText = '即将过期';
        itemClass = 'warning';
      }

      return `
        <div class="account-item ${itemClass}">
          <div class="account-name">${account.name}</div>
          <div class="account-username">@${account.username}</div>
          <div class="account-status">
            <span class="status-badge ${statusClass}">${statusText}</span>
            <span class="upload-time">
              ${account.uploaded ? '已上传' : '未上传'} • 
              ${this.formatTime(detectedTime)}
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  showLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
    document.getElementById('detect-btn').disabled = show;
    document.getElementById('upload-btn').disabled = show || this.accounts.length === 0;
  }

  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
  }

  formatTime(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}天前`;
    if (hours > 0) return `${hours}小时前`;
    if (minutes > 0) return `${minutes}分钟前`;
    return '刚刚';
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

// 初始化扩展
document.addEventListener('DOMContentLoaded', () => {
  new TikTokExtension();
});