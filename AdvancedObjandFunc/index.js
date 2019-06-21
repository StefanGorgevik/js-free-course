  //Function constructor
/*
    var john = {
        name:"John",
        yearOfBirth: 1990,
        job: "teacher"
    };

function Person(name,year,job) {
    this.name = name;
    this.yearOfBirth = year;
    this.job = job;
    this.calculateAge = function() {
        console.log(2019 - this.yearOfBirth);
    }
}

    //adding calcAge to Person
    // Person.prototype.calculateAge = function() {
    //     console.log(2019 - this.yearOfBirth);
    // }

var mark = new Person("Mark", 1994, "Driver");
var jane = new Person("Jane", 1990, "Teacher");
console.log(mark);

mark.calculateAge();
jane.calculateAge();*/



//Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);

john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

console.log(john);
john.calculateAge(); 

var jane = Object.create(personProto, {
    name: {value: "Jane"},
    yearOfBirth: {value: 1969},
    job: {value: "designer"}
});

console.log(jane);
jane.calculateAge();*/

//primitives vs objects

//primitives
var a = 23;
var b = a;
a = 46;
// console.log(a);
// console.log(b);


//objects
var obj1 = {
    name: "John",
    age: 26
}     

var obj2 = obj1;
//they will be the same objects. 
obj1.age = 30; //changing age on obj1 will do the same on obj2
// console.log(obj1.age);
// console.log(obj2.age);

//functions

var age = 25;
var obj = {
    name: "Stefan",
    city: "Veles"
}

function change(a ,b) {
    a = 30;
    b.city = "Skopje";
} 

change(age, obj);
console.log(age);
console.log(obj.city);