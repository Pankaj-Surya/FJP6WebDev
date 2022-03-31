const fs=require("fs");

// console.log("Before ");

// let content = fs.readFileSync("file.txt");

// console.log(content+" ");

// console.log("After");


// ASYCNHRONOUS ==> readFile('filename',cb)
//                  parallely line of code executes
// SYNCHRONOUS  ==> readFileSync() 
//                  line by line code execcute
// n number of lines of code
 
console.log("Before ");

 fs.readFile("file1.txt",cb);

function cb(error,data){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(data+"");
    }
 
}

//console.log(content+" ");

console.log("After");


