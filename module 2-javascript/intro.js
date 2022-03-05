// Printing in java script
// console.log("HIIII");
// console.log("dhdhddh");

// Variable in js
// let num=10;
// console.log(num);

// let char='c';
// console.log(char);

// let str=` I am string`;
// console.log(str);

// let bolean=true
// console.log(bolean);

// // Loops
// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// let count=10;
// while(count>0){
// console.log(count);
// count++;
// }

// Is Prime number
let num=11;
let flag=1; //prime no
for(let i=2;i*i<=num;i++)
{
    if(num%i==0)
    {
        flag=0;
        break;
    }
}
if(flag==1)
{
    console.log("Prime No.");

}
else
{
    console.log("Not prime No.");
}
// let a=10;
// let b=20;
// let c=a+b;
// console.log("suc)