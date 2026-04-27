import * as esbuild from 'esbuild';

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

if (watch) {
  const ctx = await esbuild.context(config);
  await ctx.watch();
  console.log('watching for changes…');
} else {
  await esbuild.build(config);
  console.log('built.');
}
