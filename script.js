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

// if (false) {
//     console.log("hi")
// }

// if(false){
//     console.log("hello")
// }else{
//     console.log("namste")
// }

// if(false){
//   console.log("1");
  
// }else if(0){
//  console.log("2");
 
// }else{
//     console.log("3");
    
// }

// if(true){
//     if(true){
//         if(true){
//             console.log("selected")
//         }else{

//         }
//     }else{

//     }
// }else{

// }

// let time = new Date 
// let hour = time.getHours();
// if(hour >= 1 && hour <= 6){
//     console.log("early morning");
    
// }else if(hour >= 7 && hour <= 12){
//     console.log("morning")
// }else if(hour >= 13 && hour <= 15){
//     console.log("afternoon");
    
// }else if(hour >= 16 && hour <= 18){
//     console.log("evening");
    
// }else{
//     console.log("good night");
    
// }
// console.log(hour);

// nested if example 


// let age = 25;
// let weight =50;
// let height = 150;

// if(age>=18 && age<=25){
//     if(weight>=50){
//         if(height>=150){
//             console.log("your form submitted and your eligible")
//         }else{
//             console.log("your height is not eligible");
            
//         }
//     }else{
//         console.log("your weight is not eligible.");
        
//     }
// }else{
//     console.log("your age is not eligible");
    
// }


// ternary operator 

// condition ? "statement" : "statement"

// let age1 = prompt("enter your aget")

// age1>=18 ? alert("eligible for vote") : alert("not eligible for vote");
// ;


// switch 

// explain 

// switch(){
//     case value : statement ; break;
//     case value : statement ; break;
// }

// let trafficLight = "blue"

// switch(trafficLight){
//     case "red" : console.log("stop");break;
//     case "yellow" : console.log("start"); break;
//     case "green" : console.log("go"); break
//     case "" : console.log("go on the flow");break;
// }

// looping statement 


// 1. for loop explain :

// for (initialization , condition , iteration){

// }

// example : -

// for(let i=0;i<=10;i++){
//     console.log(i+"*2 = "+ i*2);  
// }

// while loop 
// initialization
// while(condition){
//     statement
//     iteration
// }

// let vile = 0

// while(vile >=1){
//     console.log(vile);
//     vile-- 
// }


// initizalation
// do{
//     console.log(num);num++
    
// }
// while(condition)

// let num=prompt("enter you age :-",0);
// do{
//     alert(`your age doesn't enough try later, your age just :-${num}`);num++
    
// }
// while(num>=18)

// for of , for in

// let a = [1,2,3,4,5]

// for(let vignesh of a){
//     console.log(vignesh*2);
    
// }

// for(let vignesh in a){
//     console.log(a[vignesh]);
    
// }

// let a = [2,3,4,5,6,7,9,8]

// for(let i=0;i<=a.length;i++){
//    if(a[i]){
//     if(a[i]===9){
//         continue
//     }
//     console.log(a[i]);
//    }
// }


// function one(a,b=200){
//   console.log(a*b);
// }

// one(10,1)

// function userData(uName,Uage=56){
//    return uName+" "+Uage
// }

// var a = userData("kamal")
// console.log(a);



// var
// let 
// const

// 1. function scope || global scope
// 2.block scope
// 3.block scope



// var gScope = "var"
// let Bscope = "let"
// const bScope = "const"

// console.log(window.gScope);
// console.log(window.bScope);
// console.log(window.Bscope);


// var a=10
// let b= 20
// const c= 30

// console.log(a+b+c);


// function accessLocalVar(){
//     let  a=100
//     const b=200
//     var c=300
    
    
// }

// accessLocalVar()



// function types 


// named function 

// function name1(a,b){
//     console.log("named function");
    
// }
// name1()

// annonymous function 


// var name2 = function(a,b){
//     console.log("annoymous function");
    
// }
// name2()

// arrow function 

// var name3 =(a,b) => {
//     console.log("arrow function");
    
// }
// name3()




// /

// uncurrying function

function add(a,b,c=20){
    console.log(a+b+c)

}

add(10,20);

// currying function 

function curryingAdd(a){
    return function(b){
        return function(c=50){
            console.log(a+b+c);
        }
    }
}

curryingAdd(10)(20)(30);

// self invoking function


(function(name,age){
    document.writeln(`hi ${name} your age is ${age}`);
})("vignesh",20);


// generator function

function* abFunction() {
    yield "first";
    yield "second";
    yield "third";
    yield "fourth";
}

let gen = abFunction();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next());
// console.log(gen.next());



// 

// function* url(){
//     yield "https://www.google.com";
//     yield "https://www.facebook.com";
//     yield "https://www.youtube.com";
//     yield "https://www.instagram.com";
// }

// let genUrl = url();
// console.log(genUrl.next().value);
// console.log(genUrl.next().value);
// console.log(genUrl.next().value);
// console.log(genUrl.next().value);
// console.log(genUrl.next().value); // undefined, as there are no more values to yield


// dataStructues Array and objects

// homogenous (same data type) and hetrogenous (different data type)

// 1.array litral

let arr = [1,2,3,4,5,"vignesh",,,{name:"vignesh",age:20}]

console.log(arr[8]);

// 2. array constructor/

// let arr1 = new Array()

// arr1[0]=10
// arr1[1]=20
// arr1[2]="hello"
// arr1[3]=true
// arr1[4]={name:"vignesh",age:20}

// console.log(arr1);


// // object 

// let object1 = {
//     uName  : "vignesh",
//     uAge : 20,
//     uGender : "male",
//     eat : function(){
//         console.log("eating food");
//     },
// }

// console.log(object1.uName);
// console.log(object1.uAge);
// console.log(object1.uGender);
// object1.eat();



// let vechile = {
//     "vType" : "car",
//     "vName" : "audi",
//     "vColor" : ["red", "blue", "black"],
//     vYear : 2020
// }

// console.log(vechile.vName);
// console.log(vechile["vType"]);
// console.log(vechile["vColor"][0]);
// console.log(vechile.vColor[1]);


function getData(){
let pName ="navin"
let pAge = 20
let id = document.getElementById("index").value;

let person = {
    name: pName,
    age: pAge,
    id: id,
}

console.log(person);

}

