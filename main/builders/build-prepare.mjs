import { build } from 'esbuild';

await build({
  entryPoints: ['main/builders/**/*.ts'],
  outdir: 'build/builders',
  bundle: false,
  platform: 'node',
  format: 'cjs',
  sourcemap: true,
  outbase: 'main/builders',
  tsconfig: 'tsconfig.json',
});

console.log('✓ Build Success');
