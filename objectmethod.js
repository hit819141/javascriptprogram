// object is the collection of any type of data

// const { use } = require("react");

const person = {
    name: "Billy",
    age: 20,
    hobbies: ["touring", "gaming", "riding"],
    greet: function() {
        console.log("Hello");
    }
}

//access values from object
console.log(person.name);
console.log(person['name']);

//adding or modifing the data of obj
person.job = "react developer"
person.city = "keshod"
person.salary = 50000
console.log(person);

delete person.salary
console.log(person);

//nested object
const person1 ={
    name:'billy',
    age:20,
    address: {
        city :"junagadh",
        zipcode: '362001',
        street : "123 main st."
    }
}
console.log(person1)
console.log(person1?.address?.city)
console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entries(person1))

const user={
    name:"billy",
    role:"Admin",
    designation:"devloper",
    age:"20",
    address:{
        city:"keshod",
        zipcode:"362001",
        street:"123 main st."
    }
}
const {name : profileName ,age: profileAge}= user
console.log(profileName)
console.log(profileAge)

const {name,age,role,state="Gujarat"}=user
console.log(name,age,role,state)

const array =[1,2,3]
const moreElements = [...array,4,5,6]
console.log(moreElements)

const originalArray = [1,2,3]
const copiedArray = [...originalArray]
console.log(copiedArray)

const arr1 = [1,2,3]
const aar2 = [4,5,6]
const mergedArray=[...arr1,...aar2]
console.log(mergedArray)

const user1 ={
    name : "Hit Bhalodiya",
    city : "keshod",
}
const user2 ={
    address : "keshod",
    age :20,
}

const newObj = {
    ...user1,
    ...user2,
}
console.log(newObj)