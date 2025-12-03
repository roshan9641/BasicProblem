
// let a = prompt("what is your age");
// a = Number.parseInt;


// if(a>10 && a<20){
//     console.log("your age lies between them");

// }else{
//     console.log("your age doesnt lies between them");
// }
// let age =10;
// let a=(age>18 ? "you can drive": "you can not drive");
// console.log(a);
// let n=prompt("Enter the number");
// n = Number.parseInt(n);
// let sum=0;
// for (let i = 0; i < n; i++) {
//     console.log(i+1);
//     sum +=(i+1) ;
    
// }
// console.log(sum);
// let obj = {q:1,
//             w:2,
//             e:3,
//             r:4
//         }
//         for(let a in obj){
//             console.log(a ,"value is",obj[a]);
//         }
// function name(x,y) {
//    console.log(x+y);
// }

// name(2,4);
// const name=()=>{
//     return "Roshan";
// }
// console.log(name());
// let marks = {ankit :34, rohit : 45,Roshan : 50};
// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("marks of "+ Object.keys(marks)[i]+" are "+ marks[Object.keys(marks)[i]]);
// }

// let a=10;
// let b

// while (b!=a) {
//     prompt("enter the number");

// }console.log("correct");
// const mean=(a,b,x,y,z)=>{
//     let v= (a+b+x+y+z)/5;
//     return v;
// }
// let n=mean(2,2,3,4,4);
// console.log(n);

// let s='ro\nhan'
// // console.log(s[2]);
// console.log(s);
// let t= "sohan"
// let sent = `${s} is know ${t}`;
// console.log(sent);

let a= "mohan ";
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.slice(2,5));
console.log(a.slice(2));
console.log(a.replace("m","k"));
console.log(a.search("o"));
console.log(a.trim());
let o= "mohit"
console.log(a.concat(" is a friend of ",o," ok"));

let sent = "this is a dog"
let word = "fog"
console.log(sent.startsWith("t"));
console.log(sent.endsWith("dog"));
console.log(sent.includes(word));
console.log(`${word}${sent.includes(word)?"have four leg":"not right"}`);
console.log(word.replace("o","ro"));