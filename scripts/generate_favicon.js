const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Helper to assemble a standard multi-resolution ICO file from PNG buffers
function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // count

  let offset = 6 + count * 16;
  const dirEntries = [];
  for (const img of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width === 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height === 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
}

async function run() {
  const root = path.join(__dirname, '..');
  const cleanClapperPath = path.join(root, 'public', 'clapperboard-clean.png');

  // Let's create high-resolution versions:
  // We want the clapperboard cleanly centered on a square canvas.
  // The clapperboard itself is width: 324, height: 345.
  // Placing it inside a 512x512 transparent square canvas with optimal padding:
  const clapper512 = await sharp(cleanClapperPath)
    .resize(460, 460, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .extend({
      top: 26,
      bottom: 26,
      left: 26,
      right: 26,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  // Also create a circular badge variant (matching the circle style shown in browser tabs,
  // with luxury dark navy fill and warm amber outline so it looks stunning on light and dark browser tabs alike):
  const circleSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tabGrad" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="60%" stop-color="#0F172A"/>
          <stop offset="100%" stop-color="#020617"/>
        </radialGradient>
      </defs>
      <!-- Background Circle -->
      <circle cx="256" cy="256" r="246" fill="url(#tabGrad)" stroke="#F59E0B" stroke-width="14" stroke-opacity="0.85"/>
      <circle cx="256" cy="256" r="236" fill="none" stroke="#FDE68A" stroke-width="3" stroke-opacity="0.4"/>
    </svg>
  `;

  const clapperInsideBadge = await sharp(cleanClapperPath)
    .resize(340, 340, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  const circularBadge512 = await sharp(Buffer.from(circleSvg))
    .composite([{ input: clapperInsideBadge, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save source assets:
  fs.writeFileSync(path.join(root, 'public', 'logo-icon.png'), circularBadge512);
  fs.writeFileSync(path.join(root, 'public', 'clapper-pure.png'), clapper512);

  // Generate standard Next.js and web favicon sizes:
  const icon16 = await sharp(circularBadge512).resize(16, 16).png().toBuffer();
  const icon32 = await sharp(circularBadge512).resize(32, 32).png().toBuffer();
  const icon48 = await sharp(circularBadge512).resize(48, 48).png().toBuffer();
  const icon64 = await sharp(circularBadge512).resize(64, 64).png().toBuffer();
  const icon180 = await sharp(circularBadge512).resize(180, 180).png().toBuffer();
  const icon192 = await sharp(circularBadge512).resize(192, 192).png().toBuffer();
  const icon512 = await sharp(circularBadge512).resize(512, 512).png().toBuffer();

  // Create multi-resolution ICO:
  const icoData = createIco([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 }
  ]);

  // Write to both public/ and src/app/ so all Next.js metadata routes find it:
  fs.writeFileSync(path.join(root, 'public', 'favicon.ico'), icoData);
  fs.writeFileSync(path.join(root, 'src', 'app', 'favicon.ico'), icoData);

  fs.writeFileSync(path.join(root, 'public', 'icon.png'), icon64);
  fs.writeFileSync(path.join(root, 'src', 'app', 'icon.png'), icon64);

  fs.writeFileSync(path.join(root, 'public', 'apple-icon.png'), icon180);
  fs.writeFileSync(path.join(root, 'src', 'app', 'apple-icon.png'), icon180);

  fs.writeFileSync(path.join(root, 'public', 'icon-192.png'), icon192);
  fs.writeFileSync(path.join(root, 'public', 'icon-512.png'), icon512);

  console.log('Successfully generated all clapperboard favicon and icon assets!');
}

run().catch(console.error);
