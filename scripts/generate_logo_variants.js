const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 implementation
function crc32(buf) {
  let c;
  const table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c;
  }
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ (-1)) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBuf, data]);
  const crcVal = crc32(body);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crcVal, 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function encodePng(decompressedData, width, height) {
  const header = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  
  // IHDR: 13 bytes
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const ihdrChunk = makeChunk('IHDR', ihdr);

  // IDAT
  const compressed = zlib.deflateSync(decompressedData, { level: 9 });
  const idatChunk = makeChunk('IDAT', compressed);

  // IEND
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]);
}

const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
const fileBuf = fs.readFileSync(logoPath);

let pos = 8;
const chunks = [];
while (pos < fileBuf.length) {
  const len = fileBuf.readUInt32BE(pos);
  const type = fileBuf.slice(pos + 4, pos + 8).toString('ascii');
  if (type === 'IDAT') chunks.push(fileBuf.slice(pos + 8, pos + 8 + len));
  pos += 12 + len;
}

const decompressed = zlib.inflateSync(Buffer.concat(chunks));
const width = 1024;
const height = 436;
const scanline = 1 + width * 4;

// 1. Create logo-light.png (White text for dark backgrounds)
const lightData = Buffer.from(decompressed);
for (let y = 0; y < height; y++) {
  for (let x = 380; x < width; x++) {
    const idx = y * scanline + 1 + x * 4;
    const a = lightData[idx + 3];
    if (a > 20) {
      // Invert black text to crisp white (#F8FAFC)
      lightData[idx] = 248;     // R
      lightData[idx + 1] = 250; // G
      lightData[idx + 2] = 252; // B
    }
  }
}
const lightPng = encodePng(lightData, width, height);
fs.writeFileSync(path.join(__dirname, '..', 'public', 'logo-light.png'), lightPng);
console.log('Successfully created public/logo-light.png (white text for dark backgrounds)');

// 2. Create logo-icon.png (Clapperboard icon only, square cropped)
const iconWidth = 380;
const iconHeight = 436;
const iconScanline = 1 + iconWidth * 4;
const iconData = Buffer.alloc(iconHeight * iconScanline);

for (let y = 0; y < iconHeight; y++) {
  iconData[y * iconScanline] = 0; // Filter byte: 0 None
  for (let x = 0; x < iconWidth; x++) {
    const srcIdx = y * scanline + 1 + x * 4;
    const destIdx = y * iconScanline + 1 + x * 4;
    iconData[destIdx] = decompressed[srcIdx];
    iconData[destIdx + 1] = decompressed[srcIdx + 1];
    iconData[destIdx + 2] = decompressed[srcIdx + 2];
    iconData[destIdx + 3] = decompressed[srcIdx + 3];
  }
}
const iconPng = encodePng(iconData, iconWidth, iconHeight);
fs.writeFileSync(path.join(__dirname, '..', 'public', 'logo-icon.png'), iconPng);
console.log('Successfully created public/logo-icon.png (clapperboard icon)');
