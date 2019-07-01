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
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);


//objects
// var obj1 = {
//     name: "John",
//     age: 26
// }     

//var obj2 = obj1;
//they will be the same objects. 
//obj1.age = 30; //changing age on obj1 will do the same on obj2
// console.log(obj1.age);
// console.log(obj2.age);

//functions

// var age = 25;
// var obj = {
//     name: "Stefan",
//     city: "Veles"
// }

// function change(a ,b) {
//     a = 30;
//     b.city = "Skopje";
// } 

// change(age, obj);
// console.log(age);
// console.log(obj.city);

//First class functions passing functions as arguments

// var years = [1990, 1994, 1965, 1937, 2005, 1998];

// function arrayCalc(arr,fn) {
//     var arrRes = [];
//     for(var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i])); 
//     }
//     return arrRes;
// }

// function calcAge(el) {
//     return 2019 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// var maxHR = (el) => {
//     if(el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     }else {
//         return -1;
//     }
// };

// var ages = arrayCalc(years,calcAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// var hr = arrayCalc(ages, maxHR);
// console.log(hr);

//FUNCTIONS RETURNING FUNCTIONS

// var interviewQuestion = (job) => {
//     if(job === "designer") {
//         return function(name) {
//             console.log(name + ", can you please explain what UX design is?");
//         }
//     } else if (job === "teacher"){
//         return function(name) {
//             console.log(name + ", what subject do you teach?");
//         }
//     } else {
//         return function(name) {
//             console.log("Hello " + name + ", what do you do? ");
//         }
//     }
// } 

// var teacherQuestion = interviewQuestion("teacher"); //THIS becomes a function becase we passed "teacher"
// teacherQuestion("Stefan"); // calling the func with name

// var designerQuestion = interviewQuestion("designer");
// designerQuestion("John");

// interviewQuestion("teacher")("Stef");


//immediately invoked func expressions IIFE

// function game() {
//     var score = Math.random() * 10;
//     console.log(score>= 5);
// }
// game();

// (
//     function() {
//         var score = Math.random() * 10;
//         console.log(score>= 5);  
//     }
// )();

// (
//     function(goodLuck) {
//         var score = Math.random() * 10;
//         console.log(score>= 5 - goodLuck);  
//     }
// )(5);


//CLOSURES

// function retirement(retirementAge) {
//     var a = " years left until retirement!"
//     return function(yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1990);
// //OR:

// retirement(66)(1990);

// var retirementMK = retirement(64);
// retirementMK(1994);

// var interviewQuestion = (job) => {
    //     if(job === "designer") {
    //         return function(name) {
    //             console.log(name + ", can you please explain what UX design is?");
    //         }
    //     } else if (job === "teacher"){
    //         return function(name) {
    //             console.log(name + ", what subject do you teach?");
    //         }
    //     } else {
    //         return function(name) {
    //             console.log("Hello " + name + ", what do you do? ");
    //         }
    //     }
    // } 

//     var interviewQuestion = (job) => {
//         var phrase = " "
//         return function(name) {
//             if(job === "designer") {
//                             console.log(name + ", can you please explain what UX design is?");
//                         }
//                      else if (job === "teacher"){
//                             console.log(name + ", what subject do you teach?");
//                     } else {
//                             console.log("Hello " + name + ", what do you do? ");
//                         }
//                     }
//         }

// var jobDesigner = interviewQuestion("designer");
// jobDesigner("Stefan");
// var jobTeacher = interviewQuestion("teacher");
// jobTeacher("Michael");
// interviewQuestion()("Jack");


//BIND,CALL and APPLY

// var john = {
//     name: "John",
//     age: 25,
//     job: "teacher",
//     presentation: function(style, timeOfDay) {
//         if( style === "formal") {
//             console.log("Good " + timeOfDay + ", ladies and gentlemen! I\'m " + this.name + " ,I am a " + this.job + " and I am " + this.age + " years old!")
//         }else if(style === "friendly") {
//             console.log("Hey! Whats up? " + "I\'m " + this.name + " ,I am a " + this.job + " and I am " + this.age + " years old! Have a nice " + timeOfDay + "!")
//         }
//     }
// }

// john.presentation("formal", "morning");

// var emily = {
//     name: "Emily",
//     age: 35,
//     job: "designer"
// }

// john.presentation.call(emily,"friendly", "afternoon");

// //john.presentation.apply(emily, ["friendly", "morning"]); // the call method accepts an array(doesn't work in this exm.)

// //***BIND

// var johnFriendly = john.presentation.bind(john, "friendly");

// johnFriendly("morning");
// johnFriendly("night");

// var emilyFormal = john.presentation.bind(emily,"formal");
// emilyFormal("afternoon");



//EXAMPLE

var years = [1990, 1994, 1965, 1937, 2005, 1998];

function arrayCalc(arr,fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
       arrRes.push(fn(arr[i])); 
    }
    return arrRes;
}

function calcAge(el) {
    return 2019 - el;
}

function isFullAge(limit,el) {
    return el >= limit;
}

var ages = arrayCalc(years, calcAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));


console.log(ages);
console.log(fullJapan);