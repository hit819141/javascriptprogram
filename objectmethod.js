// object is the collection of any type of data

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