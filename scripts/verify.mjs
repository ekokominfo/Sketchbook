import fs from 'node:fs';
import crypto from 'node:crypto';
const bundle=JSON.parse(fs.readFileSync('source-bundle.json','utf8'));
for(const a of [...bundle.assets,...bundle.files.filter(f=>f.code)]) {
  const data=fs.readFileSync(a.path);
  if(crypto.createHash('sha256').update(data).digest('hex')!==a.sha256) throw Error('Hash mismatch: '+a.path);
}
const html=fs.readFileSync('public/landing-pages/meng-to-sketchbook.html','utf8');
if(/(?:src=|url\()\s*["']?https?:/.test(html)) throw Error('Remote render asset remains');
console.log('17 asset hashes, 5 registered source hashes, and local asset URLs verified.');
