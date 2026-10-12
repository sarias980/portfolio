// Generates the static image assets committed in public/: favicon set, web
// manifest icons, Open Graph images and WebP company logos.
// Run with `npm run assets` after changing the brand mark or the copy below.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');

const colors = {
  ink: '#0f1622',
  navy: '#17263d',
  primary: '#364F6B',
  teal: '#3FC1C9',
  pink: '#FC5185',
  light: '#F5F5F5',
};

// The "S" mark from the original sarias.svg (bounding box ≈ x 1.2–11.6, y 11.9–40).
const sPath =
  'M8.5768,15.955 L6.2918,14.7947 L4.6629,15.8533 L4.42989,18.2341 L4.69051,19.587 C5.42327,20.4562 8.68711,25.6086 8.68711,25.6086 L11.1783,30.0338 C11.1783,30.0338 11.5892,35.4862 11.5754,35.7498 C11.5616,36.0134 9.98558,39.3332 9.98558,39.3332 L5.84038,40.0453 L2.62478,38.569 L1.19978,35.9222 L1.87966,31.2034 L5.31676,29.7056 L7.53196,31.6579 L7.85161,34.6488 L6.27491,36.4102 L4.24821,35.8622 L4.40766,33.8501 L5.63716,33.1633 L5.58888,33.8823 L4.82236,35.016 L6.09636,34.8289 L6.62144,32.9809 L5.21334,32.1208 L3.98914,33.2951 L3.52922,35.2152 L3.7477,36.4845 L6.8421,37.2595 L8.3437,35.2995 L8.70241,34.0087 L8.44717,30.8867 L6.17907,26.2247 L3.33377,22.4895 L1.83597,17.6099 L2.79413,13.5535 L5.95603,11.9461 L9.59693,13.1219 L10.8065,14.7944 L10.8425,18.2 L9.40535,20.5478 L6.67655,20.4619 L5.25545,18.0673 L5.85949,16.3795 L6.91349,16.0438 L8.27869,17.1698 L8.06482,18.2 L6.84142,17.6558 L8.13682,19.336 L9.02982,18.3073 L8.5768,15.955';

// Places the S centred in a `size` square, `scale` relative to the mark height.
const markGroup = ({ cx, cy, height }) => {
  const scale = height / 28.1;
  const tx = cx - 6.4 * scale;
  const ty = cy - 26 * scale;
  return `<path fill="${colors.light}" transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${scale.toFixed(4)})" d="${sPath}"/>`;
};

const iconSvg = ({ size = 512, radius = 112, inset = 1 } = {}) => {
  const markHeight = size * 0.56 * inset;
  const barWidth = size * 0.44 * inset;
  const barHeight = Math.max(2, size * 0.05 * inset);
  const barY = size / 2 + markHeight / 2 + size * 0.04 * inset;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <linearGradient id="bar" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="${colors.teal}"/>
      <stop offset="1" stop-color="${colors.pink}"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${radius}" fill="${colors.navy}"/>
  ${markGroup({ cx: size / 2, cy: size / 2 - barHeight, height: markHeight })}
  <rect x="${(size - barWidth) / 2}" y="${barY - barHeight}" width="${barWidth}" height="${barHeight}" rx="${barHeight / 2}" fill="url(#bar)"/>
</svg>`;
};

const escapeXml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const ogCopy = {
  en: {
    role: 'Senior Full-Stack Engineer',
    title: ['Web and mobile products,', 'from idea to production'],
    stack: 'React · React Native · TypeScript · Barcelona',
  },
  es: {
    role: 'Ingeniero Full-Stack Senior',
    title: ['Productos web y móviles,', 'de la idea a producción'],
    stack: 'React · React Native · TypeScript · Barcelona',
  },
};

const ogSvg = ({
  role,
  title,
  stack,
}) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g1" cx="0.12" cy="0.1" r="0.6">
      <stop offset="0" stop-color="${colors.teal}" stop-opacity="0.35"/>
      <stop offset="1" stop-color="${colors.teal}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="0.92" cy="0.95" r="0.55">
      <stop offset="0" stop-color="${colors.pink}" stop-opacity="0.3"/>
      <stop offset="1" stop-color="${colors.pink}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bar" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="${colors.teal}"/>
      <stop offset="1" stop-color="${colors.pink}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="${colors.ink}"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif" fill="${colors.light}">
    <text x="80" y="128" font-size="34" font-weight="700" letter-spacing="1">Sergi Arias Fernández</text>
    <text x="80" y="176" font-size="28" fill="${colors.teal}" font-weight="600">${escapeXml(role)}</text>
    <text x="80" y="318" font-size="68" font-weight="700">${escapeXml(title[0])}</text>
    <text x="80" y="398" font-size="68" font-weight="700">${escapeXml(title[1])}</text>
    <rect x="80" y="450" width="220" height="8" rx="4" fill="url(#bar)"/>
    <text x="80" y="532" font-size="30" fill="#c9d4df">${escapeXml(stack)}</text>
    <text x="1120" y="560" font-size="26" fill="#9eb0c0" text-anchor="end">sarias.dev</text>
  </g>
  <g transform="translate(980 70)">${markGroup({ cx: 70, cy: 80, height: 150 })}</g>
</svg>`;

// Minimal ICO container holding PNG-encoded images (supported by every modern browser).
const toIco = (pngs) => {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = 6 + pngs.length * 16;
  const entries = pngs.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });
  return Buffer.concat([header, ...entries, ...pngs.map(({ data }) => data)]);
};

const png = (svg, size) => sharp(Buffer.from(svg)).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

const logos = [
  { source: 'deepdots-clean.png', name: 'deepdots' },
  { source: 'coachendo-clean.png', name: 'coachendo' },
  { source: 'uve-solutions-clean.png', name: 'uve-solutions' },
  { source: 'alten-clean.png', name: 'alten' },
];

async function main() {
  await mkdir(path.join(publicDir, 'icons'), { recursive: true });

  await writeFile(path.join(publicDir, 'favicon.svg'), iconSvg({ size: 64, radius: 14 }));
  await writeFile(
    path.join(publicDir, 'favicon.ico'),
    toIco([
      { size: 16, data: await png(iconSvg({ size: 64, radius: 12 }), 16) },
      { size: 32, data: await png(iconSvg({ size: 64, radius: 12 }), 32) },
      { size: 48, data: await png(iconSvg({ size: 64, radius: 12 }), 48) },
    ]),
  );
  // Apple applies its own mask, so the touch icon is a full square.
  await writeFile(path.join(publicDir, 'apple-touch-icon.png'), await png(iconSvg({ radius: 0 }), 180));
  await writeFile(path.join(publicDir, 'icons/icon-192.png'), await png(iconSvg(), 192));
  await writeFile(path.join(publicDir, 'icons/icon-512.png'), await png(iconSvg(), 512));
  // Maskable icons need the mark inside the central 80% safe zone.
  await writeFile(
    path.join(publicDir, 'icons/icon-maskable-512.png'),
    await png(iconSvg({ radius: 0, inset: 0.78 }), 512),
  );

  for (const [locale, copy] of Object.entries(ogCopy)) {
    await sharp(Buffer.from(ogSvg(copy)))
      .png({ compressionLevel: 9 })
      .toFile(path.join(publicDir, `og-image-${locale}.png`));
  }

  for (const { source, name } of logos) {
    const info = await sharp(path.join(root, 'assets-src/logos', source))
      .resize({ height: 104, withoutEnlargement: true })
      .webp({ quality: 88, alphaQuality: 100 })
      .toFile(path.join(publicDir, 'logos', `${name}.webp`));
    console.log(`logos/${name}.webp ${info.width}x${info.height}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
