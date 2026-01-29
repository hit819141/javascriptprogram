//---string method---
//--length()---
//---trim()---
//---toUpperCase()---
//---toLowerCase()---
//---includes()---
//---indexOf()---
//---slice()---
//---substring()---
//---replace()---
//--concat()---
//---split()---

let str = "  welcome, billy bowdan ❤️  ";
console.log(str);
console.log("length() :", str.length);

let trimtext = str.trim();
console.log("trim():", trimtext);

console.log("toUpperCase():", str.toUpperCase());
console.log("toLowerCase():", str.toLowerCase());

console.log("includes():", str.includes("billy"));

console.log("indexOf():", str.indexOf("bowdan"));

console.log("slice():", str.slice(2, 9));

console.log("substring():", str.substring(2, 9));// they are in a negative value are a not useable

console.log("replace():", str.replace("welcome", "hello"));

console.log("concat():", str.concat(" Have a nice day!"));

console.log("split():", str.split(" "));

