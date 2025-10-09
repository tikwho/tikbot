import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import * as crypto from 'crypto';

@Injectable()
export class AccountsService {
  private readonly ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'default-key-change-in-production';

  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async create(accountData: Partial<Account>): Promise<Account> {
    // 加密会话数据
    if (accountData.encrypted_session) {
      accountData.encrypted_session = this.encrypt(accountData.encrypted_session);
    }

    const account = this.accountRepository.create(accountData);
    return await this.accountRepository.save(account);
  }

  async findById(id: string): Promise<Account> {
    const account = await this.accountRepository.findOne({
      where: { id },
      relations: ['conversations'],
    });

    if (!account) {
      throw new NotFoundException('Account not found');
    }

    return account;
  }

  async findByTenant(tenantId: string): Promise<Account[]> {
    return await this.accountRepository.find({
      where: { tenant_id: tenantId, is_active: true },
    });
  }

  async getDecryptedSession(accountId: string): Promise<string> {
    const account = await this.findById(accountId);
    return this.decrypt(account.encrypted_session);
  }

  async updateHeartbeat(accountId: string): Promise<void> {
    await this.accountRepository.update(accountId, {
      last_heartbeat: new Date(),
    });
  }

  async updateSession(accountId: string, sessionData: string): Promise<void> {
    const encrypted = this.encrypt(sessionData);
    await this.accountRepository.update(accountId, {
      encrypted_session: encrypted,
      expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30天后过期
    });
  }

  async getExpiringSoon(days: number = 3): Promise<Account[]> {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + days);

    return await this.accountRepository.find({
      where: {
        is_active: true,
        expires_at: { $lte: expiryDate } as any,
      },
    });
  }

  private encrypt(text: string): string {
    const algorithm = 'aes-256-gcm';
    const key = crypto.scryptSync(this.ENCRYPTION_KEY, 'salt', 32);
    const iv = crypto.randomBytes(16);
    
    const cipher = crypto.createCipher(algorithm, key);
    cipher.setAAD(Buffer.from('account-session'));
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
  }

  private decrypt(encryptedText: string): string {
    const algorithm = 'aes-256-gcm';
    const key = crypto.scryptSync(this.ENCRYPTION_KEY, 'salt', 32);
    
    const [ivHex, authTagHex, encrypted] = encryptedText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');
    
    const decipher = crypto.createDecipher(algorithm, key);
    decipher.setAAD(Buffer.from('account-session'));
    decipher.setAuthTag(authTag);
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }
}