import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';
const files = {
  cancion: 'cancion.mpeg',
  sunflower: 'sunflower.gif',
  pvzDance: 'sunflower-pvz-dance.gif',
  pvz: 'sunflower-sunflower-plants-vs-zombies.gif',
  happyDance: 'sunflower-happy-dance.gif'
};

const mimeTypes = {
  mpeg: 'audio/mpeg',
  gif: 'image/gif'
};

let output = '/* Archivo generado automáticamente con assets en Base64 */\n\n';

for (const [key, filename] of Object.entries(files)) {
  const filePath = path.join(assetsDir, filename);
  const ext = path.extname(filename).replace('.', '');
  const mime = mimeTypes[ext] || 'application/octet-stream';
  const data = fs.readFileSync(filePath);
  const base64 = data.toString('base64');
  const dataUri = `data:${mime};base64,${base64}`;
  output += `export const ${key} = "${dataUri}";\n`;
  console.log(`Convertido: ${filename} (${(data.length / (1024 * 1024)).toFixed(2)} MB)`);
}

fs.writeFileSync('./src/embeddedAssets.js', output);
console.log('src/embeddedAssets.js generado exitosamente');
