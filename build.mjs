import * as esbuild from 'esbuild';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const watch = process.argv.includes('--watch');

const config = {
  entryPoints: {
    'js/index.bundle':   'src/pages/index.jsx',
    'js/pm.bundle':      'src/pages/pm.jsx',
    'js/theatre.bundle': 'src/pages/theatre.jsx',
  },
  bundle: true,
  outdir: '.',
  format: 'iife',
  target: ['es2019'],
  jsx: 'automatic',
  minify: true,
  sourcemap: true,
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  loader: { '.js': 'jsx', '.jsx': 'jsx' },
  logLevel: 'info',
};

async function isStale(src, out) {
  try {
    const [s, o] = await Promise.all([fs.stat(src), fs.stat(out)]);
    return s.mtimeMs > o.mtimeMs;
  } catch {
    return true;
  }
}

async function processDirToWebp(dir) {
  let entries;
  try { entries = await fs.readdir(dir); } catch { return; }
  for (const name of entries) {
    if (!/\.(jpe?g|png)$/i.test(name)) continue;
    const src = path.join(dir, name);
    const out = path.join(dir, name.replace(/\.[^.]+$/, '.webp'));
    if (!(await isStale(src, out))) continue;
    await sharp(src).webp({ quality: 80 }).toFile(out);
    console.log('  webp →', out);
  }
}

async function processOgImage() {
  const src = 'assets/JayOG.png';
  const out = 'assets/JayOG.jpg';
  try { await fs.access(src); } catch { return; }
  if (!(await isStale(src, out))) return;
  await sharp(src)
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log('  og   →', out);
}

async function processImages() {
  console.log('processing images…');
  await Promise.all([
    processDirToWebp('jay'),
    processDirToWebp('iris'),
    processOgImage(),
  ]);
}

await processImages();

if (watch) {
  const ctx = await esbuild.context(config);
  await ctx.watch();
  console.log('watching for changes…');
} else {
  await esbuild.build(config);
  console.log('built.');
}
