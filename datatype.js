// two types of data types
// 1.primitive
// Number
// BigInt
// String
// Boolean
// Symbol
// null
// undefined


//---number---
// let num = 1;
// let num2 = 2;

// console.log("num",num ,num2);

//---string---
// let name = "Billy";
// let name2 = "Hit";

// console.log("names :",name2,name);

//---boolean---
// let isTrue = true;
// let isFalse = false;
// console.log("boolean :", isTrue, isFalse);

//---undefined---
// let undef;
//console.log("undefined :", undef);

//---null---
// let empty = null;
// console.log("null :", empty);

//---symbol---
// let sym1 = Symbol("id");
// let sym2 = Symbol("id");
// console.log("symbol :", sym1 === sym2); // false

//---bigint---
// let bigInt1 = BigInt(1234567890123456789012345678901234567890);
// let bigInt2 = 1234567890123456789012345678901234567890n;
// console.log("bigint :", bigInt1 === bigInt2); // true    

// 2.non-primitive
// Array
// Object
// Function


//---object---
// let Student = {
//     name: "Billy",
//     age: 25,
//     address:{
//         city: "keshod",
//         country: "india"
//     }
// };
// console.log("object",Student);

//---array---
// let number = [1,2,3,4,5];
// console.log("Array:",number);

//---function---
// function greet() {
//     return "hello, world!"
// }
// console.log("function:",greet());

// function showValues(value){
//     console.log("this is value",value);
//     if(value == 20){
//         console.log("number---")
//     }
// }
// showValues();
// showValues(28);
// showValues([1,2,3,4,5]);

//---addition two values---
// function add(a,b){
//     return a+b;
// }
// console.log("Addition:",add(5,10));

// //---substraction two values---
// function sub(a,b){
//     return a-b;
// }
// console.log("substraction:",sub(50,10));

// //---multipication two values---
// function mul(a,b){
//     return a*b;
// }
// console.log("multipication:",mul(5,10));

// //---divison two values---
// function div(a,b){
//     return a/b;
// }
// console.log("divison:",div(50,10));

//---arrow function---
// const add = (num1 = 10, num2 = 20) => {
//     return num1 + num2
// }
// console.log('this is arrow fun.:',add())

//---arrow using arithmetic operation---
// const add=(a,b) => a+b;
// const sub=(a,b) => a-b;
// const multi=(a,b) => a*b;
// const divd=(a,b) => a/b;

// console.log("Addittion :",add(30,20));
// console.log("substraction :",sub(40,20));
// console.log("multiplication :",multi(3,20));
// console.log("division :",divd(100,20));

//---logical variable---
// let value = 20;
// console.log("logical operations:");

// value+=10; // value = value + 10
// console.log(value);

// value-=5; // value = value - 5
// console.log(value);

// value*=2; // value = value * 2
// console.log(value);

// value/=5; // value = value / 5
// console.log(value);

//---logical operation---

// let age = 25;
// let hasId = true;

// console.log("Logical AND (&&):", age > 18 && hasId);
// console.log("Logical OR(||):", age < 18 || hasId);
// console.log("Logical NOT(!):", !hasId);

// console.log(typeof age)
// console.log(typeof hasId)
// console.log(typeof name)

//---comparison operator---
// let value = 10;
// let num ="10";

// console.log("value == num:", value == num);
// console.log("value === num:", value === num); 
// console.log("value != num:", value != num);