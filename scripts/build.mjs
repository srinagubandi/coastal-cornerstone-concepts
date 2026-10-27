import { execFileSync } from 'node:child_process';
import { readFile, writeFile, cp, mkdir } from 'node:fs/promises';
import { transform } from 'esbuild';
// Avoid bundling an absolute config path through esbuild on restricted Windows hosts.
execFileSync(process.execPath, ['node_modules/vite/bin/vite.js', 'build', '--configLoader', 'runner'], { stdio: 'inherit' });
const server = await transform(await readFile('server/index.ts', 'utf8'), { loader: 'ts', platform: 'node', format: 'esm' });
await writeFile('dist/index.js', server.code);
// Also expose a conventional static `dist` entry for the private review host.
await cp('dist/public', 'dist', { recursive: true });
// Static hosts do not necessarily provide the dev server's SPA fallback.
// Publish a real HTML entry at every supported deep link.
const html = await readFile('dist/index.html', 'utf8');
const pages = ['commercial', 'residential', 'icf', 'projects', 'about', 'resources', 'contact', 'process'];
for (let number = 1; number <= 12; number++) {
  const concept = `concept-${String(number).padStart(2, '0')}`;
  const routes = [concept, ...pages.map(page => `${concept}/${page}`)];
  for (const route of routes) {
    for (const root of ['dist', 'dist/public']) {
      await mkdir(`${root}/${route}`, { recursive: true });
      await writeFile(`${root}/${route}/index.html`, html);
    }
  }
}
console.log('Frontend and server build complete.');
