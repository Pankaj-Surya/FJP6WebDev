let fs=require("fs");

// console.log(fs);

//CRUD Operation on fs 
//DOM , Android Dev, sql ,Angular,React

let path=require("path");

let filePath=path.join(__dirname,"file.txt");
console.log(filePath);


// C-Create
//Write File : even we dont have file
fs.writeFileSync(filePath,"I am text File");
// overwrite in existing file
fs.writeFileSync(filePath,"write in existing file.");

// R-Read
console.log("Before update :");
let content=fs.readFileSync(filePath,'utf-8');
console.log(content);

// U-Update
let updateFile=fs.appendFileSync(filePath,"\n file updated")
console.log("After Update");
console.log(fs.readFileSync(filePath,'utf-8'));

// D-Delete
fs.unlinkSync(filePath);