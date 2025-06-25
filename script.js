// variables 

// var
// let
// const

// var age = 30; (declaration & initialiazation)
// var age = 50; (redeclaration)
// age=80; reintizialation

// var age; assining
// age=100 reintizialation


// console.log(age)

// let newAge = 150;
// newAge = 200;

// console.log(newAge)

// const employeeName = "XYZ";
//  employeeName = "ABC"

// console.log(employeeName)


// printing statement 

// alert("hello world")

// confirm("enter the world")

// var name = prompt("enter your name :-")

// console.log(name)


// document.writeln("hi hello ")

// let name = "ben10"

// console.log(name)


// datatypes:-

// 1. primitive datatypes
// 2. non primitive datatypes

// 1. primitive datatypes 

// 1.Number
// 2.string
// 3.boolean
// 4.null
// 5.undefined

// 2. non primitive DataTypes 

// 1.Array
// 2.object
// 3.function 
// 4.date

// 1. primitive datatypes :- explain

// console.log(typeof(12));
// console.log(typeof("123"));
// console.log(typeof(true));
// console.log(typeof(num));
// console.log(typeof(0));

// 2. nonprimitive datatypes

// 1. array 

// let arr = [1,2,3,true,"123",{}]

// console.log(arr[arr.length-2])

// 2. object 

// let object = {
//     name : "xyz",
//     age : 14,
//     gender : "male",
//     qualification : "btech",
//     ispassedOut : true,
//     frnd : {
//         name : "abc",
//         age : 14,
//         ispassedOut : false
//     },
//     isCertificate : ["html","css","js"]
// }

// console.log(object.frnd.ispassedOut);


// operators 

// 1. arithmatic operator (mathematical values)
// 2.Assignment operators (var declration and assign)
// 3.comparitive operators 1<2
// 4.logical operators (condition)

// 1. arithmatic operator (mathematical values)
//  explain 

// addition +
// subraction -
// multiplication *
// division /
// modulus %
// increment ++
// decrement --

// console.log(10+20);
// console.log(10-20);
// console.log(10*20);
// console.log(10/20);
// console.log(19%20);

// var a = 10
// var b = --a
// var c = a--


// console.log(c)

// let num = 20
// let num1 = num-- - num-- 

// console.log(num1);

// Assignment opperator 

// addition 

// let age = 20



// age += 20

// console.log(age);

// let age1 = 20
// let additionalVal = 100

// age1 %= 100 

// console.log(age1);


// relational operators or comoparision operators 

{/* < less then 5<2 false
> greater then 5>2 true
<= less then equal 5<=2 false
>= greater then equal 5>=2 true
== loosy type equal 5=="5" true
=== strictly type equal 5==="5" false */}


// console.log(5===5);


// logical operators 

// and &&  true && true = true

// or  ||   true || false = true

// not  !  true = false / false = true



// let ageBen = 10
// console.log(ageBen>=18 && ageBen<=30);

// console.log(ageBen === 10);



// concatenation /

// let str1 =  "RCB"
// let str2 = "get the cup last year"

// console.log(str1+" "+str2);

// template string 

// console.log(`who is last year win the IPL : ${str1} ${str2}.`)


// type convertion

// 1.implicit type convertion 
// 2. explicit type converstion 

// 1. explain 

// let str5 = "123"
// let num2 = 123

// console.log((10-"67"));

// 2. explain

// console.log(Boolean());




// 1.conditional statement (if, if-else,if else else-if,nested if , switch, ternary operator)
// 2.looping statement (for , while , do while , for of , for in)



// 1. explain 

if (false) {
    console.log("hi")
}

if(false){
    console.log("hello")
}else{
    console.log("namste")
}

if(false){
  console.log("1");
  
}else if(0){
 console.log("2");
 
}else{
    console.log("3");
    
}

if(true){
    if(true){
        if(true){
            console.log("selected")
        }else{

        }
    }else{

    }
}else{

}


let hour = 16;
if(hour >= 1 && hour <= 6){
    console.log("early morning");
    
}else if(hour >= 7 && hour <= 12){
    console.log("morning")
}else if(hour >= 13 && hour <= 15){
    console.log("afternoon");
    
}else if(hour >= 16 && hour <= 18){
    console.log("evening");
    
}else{
    console.log("good night");
    
}