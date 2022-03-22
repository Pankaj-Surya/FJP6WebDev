// read content of unorganised folder and make  an array which has extension name of each file

//SOl:: unorganize folder read --> ext name extract in an array

let fs=require('fs');
let path=require('path');

let folderKaPath=path.join(__dirname,"..",'unorganised');
// console.log("folderKaPath -->"+folderKaPath);
 let content= fs.readdirSync(folderKaPath);
 //console.log(content);

let extArr=[];

for(let i=0;i<content.length;i++)
{
    let name=content[i];
    let extName=path.extname(name);
    extArr.push(extName);
}

console.log(extArr);