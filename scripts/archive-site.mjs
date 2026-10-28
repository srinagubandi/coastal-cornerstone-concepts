import fs from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('source-archive/cccbuild');
await fs.mkdir(root,{recursive:true});
const queue=['https://cccbuild.com/','https://cccbuild.com/wp-sitemap.xml','https://cccbuild.com/sitemap_index.xml','https://cccbuild.com/robots.txt'];
const seen=new Set(), records=[];
while(queue.length && seen.size<1500){
 const url=queue.shift(); if(seen.has(url))continue;seen.add(url);
 try{
  const r=await fetch(url);const type=r.headers.get('content-type')||'';
  if(!r.ok){records.push({url,status:r.status});continue;}
  const u=new URL(url); let filename=decodeURIComponent(u.pathname).replace(/^\//,'')||'index.html';
  if(filename.endsWith('/'))filename+='index.html';
  else if(!path.extname(filename))filename+='/index.html';
  if(filename.includes('..'))continue;
  const dest=path.join(root,filename);await fs.mkdir(path.dirname(dest),{recursive:true});
  const bytes=Buffer.from(await r.arrayBuffer());await fs.writeFile(dest,bytes);
  records.push({url,status:r.status,type,bytes:bytes.length,file:filename});
  if(/html|xml|css|text\/plain/.test(type)){
   const html=bytes.toString();
   const refs=[...html.matchAll(/(?:href|src|data-src)=["']([^"']+)["']/gi)].map(m=>m[1]);
   refs.push(...[...html.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]));
   refs.push(...[...html.matchAll(/url\(["']?([^)'"\s]+)["']?\)/g)].map(m=>m[1]));
   for(const match of html.matchAll(/srcset=["']([^"']+)["']/gi))refs.push(...match[1].split(',').map(s=>s.trim().split(/\s+/)[0]));
   for(const ref of refs){try{const n=new URL(ref.replaceAll('&amp;','&'),url);n.hash='';if(n.hostname.replace(/^www\./,'')!=='cccbuild.com'||/wp-json|wp-admin|feed|xmlrpc|\{|\}|%7B/i.test(n.pathname))continue;
    if(n.search&&!/\.(?:css|js|jpg|jpeg|webp|png|svg|woff2?|ttf|pdf)$/i.test(n.pathname))continue;
    n.search='';
    if(!seen.has(n.href)&&!queue.includes(n.href))queue.push(n.href);
   }catch{}}
  }
 }catch(e){records.push({url,error:e.message});}
}
await fs.writeFile(path.join(root,'manifest.json'),JSON.stringify({captured:new Date().toISOString(),scope:'Public same-origin linked pages, assets and PDFs; no private content or backend.',remaining:queue,records},null,2));
console.log(JSON.stringify({downloaded:records.filter(r=>r.status===200).length,pdfs:records.filter(r=>/pdf/.test(r.type||'')),remaining:queue.length,failures:records.filter(r=>r.status!==200)}));
