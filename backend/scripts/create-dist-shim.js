const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const shimPath = path.join(distDir, 'main.js');
const targetRel = 'backend/src/main.js';

try {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  fs.writeFileSync(shimPath, `require('./${targetRel}');\n`);
  console.log(`Created dist/main.js shim -> ${targetRel}`);
} catch (err) {
  console.error('Failed to create dist/main.js shim:', err);
  process.exit(1);
}

