//array method
//---length---
//---push---
//---pop---
//---unshift---
//---shift---
//---concat---
//--includes---
//--indexof---
//---splice---
//---slice---
//---join---
//---delete---
//--- map---
//---filter---
//---find---
//---foreach---
//---sort---
//---reverse---
//---flat---

let arr = ['one','two','three','four']
console.log("Default Array:",arr)

console.log("length(): ",arr.length)

console.log("push(): ",arr.push("new add element"))//last place in a element in a add
//arr.push("new element add") 27 & 28 line are same work
console.log("array after push :", arr)

arr.pop();
console.log("array after pop():",arr)//last place in a element in a delete

arr.unshift("first place add element")//first place in a element in a add
console.log("array after unshift():",arr)

arr.shift();//first place in a element in a delete
console.log("array after shift():",arr)

let nerArr = ["str 1", "str 2"] //join two array
let mixedArr = arr.concat(nerArr)//array merge
console.log("default array after concat:",arr)
console.log(" array after concat:",mixedArr)

console.log("includes():",arr.includes("four"))//check the element is present or not

console.log("indexof():",arr.indexOf("one"))//find the index of element

console.log("slice():",arr.slice(2,4))//add or remove element in a array

//console.log("splice():",arr.splice(1,2))//add or remove element in a array
console.log("old array:",arr)

console.log("join():",arr.join(","))//array to string conversion with separator

delete arr[4]
console.log(arr)


console.log ("Array iteration method: ")
let numbers = [1,2,3,4,5,]
console.log("map :", numbers.map(num => num * 5))//array element multiply by 2
console.log("after map old array:",numbers)

console.log("filter :", numbers.filter(num => num > 2))//array element filter greater than 2
console.log("after filter old array:",numbers)

console.log("forEach :")
numbers.forEach(num => console.log(num))//array element multiply by 3

let num = [2,5,3,4,1]
console.log("sort():",num.sort())//array element sort

console.log("reverse():",num.reverse())//array element reverse

let nestedArray = [1,2,[3,4],[5,6]]
console.log("default nested array:",nestedArray)
let flatArray = nestedArray.flat()
console.log("flatArray",flatArray)