import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const snapshot=path.join(root,'published/content.json');
if(!fs.existsSync(snapshot)) throw Error('Missing published/content.json: export and review existing content before first publication.');
const data=JSON.parse(fs.readFileSync(snapshot,'utf8'));
if(data.content?.version!==1) throw Error('Invalid published content snapshot');
const output=path.join(root,'pages-output');
fs.rmSync(output,{recursive:true,force:true});
fs.cpSync(path.join(root,'public-site'),output,{recursive:true});
const viewer=fs.readFileSync(path.join(output,'viewer.js'),'utf8');
if(!viewer.includes("fetch('/api/content'")) throw Error('Viewer integration changed; review build script.');
fs.writeFileSync(path.join(output,'viewer.js'),viewer.replace("fetch('/api/content'","fetch('./published-content.json'"));
fs.copyFileSync(snapshot,path.join(output,'published-content.json'));
fs.writeFileSync(path.join(output,'.nojekyll'),'');
for(const privateName of ['owner','admin','access-config.js','.openai']) {
 if(fs.existsSync(path.join(output,privateName))) throw Error('Private material found in public output');
}
console.log('Pages static build prepared.');
