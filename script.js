// // // // variables 

// // // // var
// // // // let
// // // // const

// // // // var age = 30; (declaration & initialiazation)
// // // // var age = 50; (redeclaration)
// // // // age=80; reintizialation

// // // // var age; assining
// // // // age=100 reintizialation


// // // // console.log(age)

// // // // let newAge = 150;
// // // // newAge = 200;

// // // // console.log(newAge)

// // // // const employeeName = "XYZ";
// // // //  employeeName = "ABC"

// // // // console.log(employeeName)


// // // // printing statement 

// // // // alert("hello world")

// // // // confirm("enter the world")

// // // // var name = prompt("enter your name :-")

// // // // console.log(name)


// // // // document.writeln("hi hello ")

// // // // let name = "ben10"

// // // // console.log(name)


// // // // datatypes:-

// // // // 1. primitive datatypes
// // // // 2. non primitive datatypes

// // // // 1. primitive datatypes 

// // // // 1.Number
// // // // 2.string
// // // // 3.boolean
// // // // 4.null
// // // // 5.undefined

// // // // 2. non primitive DataTypes 

// // // // 1.Array
// // // // 2.object
// // // // 3.function 
// // // // 4.date

// // // // 1. primitive datatypes :- explain

// // // // console.log(typeof(12));
// // // // console.log(typeof("123"));
// // // // console.log(typeof(true));
// // // // console.log(typeof(num));
// // // // console.log(typeof(0));

// // // // 2. nonprimitive datatypes

// // // // 1. array 

// // // // let arr = [1,2,3,true,"123",{}]

// // // // console.log(arr[arr.length-2])

// // // // 2. object 

// // // // let object = {
// // // //     name : "xyz",
// // // //     age : 14,
// // // //     gender : "male",
// // // //     qualification : "btech",
// // // //     ispassedOut : true,
// // // //     frnd : {
// // // //         name : "abc",
// // // //         age : 14,
// // // //         ispassedOut : false
// // // //     },
// // // //     isCertificate : ["html","css","js"]
// // // // }

// // // // console.log(object.frnd.ispassedOut);


// // // // operators 

// // // // 1. arithmatic operator (mathematical values)
// // // // 2.Assignment operators (var declration and assign)
// // // // 3.comparitive operators 1<2
// // // // 4.logical operators (condition)

// // // // 1. arithmatic operator (mathematical values)
// // // //  explain 

// // // // addition +
// // // // subraction -
// // // // multiplication *
// // // // division /
// // // // modulus %
// // // // increment ++
// // // // decrement --

// // // // console.log(10+20);
// // // // console.log(10-20);
// // // // console.log(10*20);
// // // // console.log(10/20);
// // // // console.log(19%20);

// // // // var a = 10
// // // // var b = --a
// // // // var c = a--


// // // // console.log(c)

// // // // let num = 20
// // // // let num1 = num-- - num-- 

// // // // console.log(num1);

// // // // Assignment opperator 

// // // // addition 

// // // // let age = 20



// // // // age += 20

// // // // console.log(age);

// // // // let age1 = 20
// // // // let additionalVal = 100

// // // // age1 %= 100 

// // // // console.log(age1);


// // // // relational operators or comoparision operators 

// // // {/* < less then 5<2 false
// // // > greater then 5>2 true
// // // <= less then equal 5<=2 false
// // // >= greater then equal 5>=2 true
// // // == loosy type equal 5=="5" true
// // // === strictly type equal 5==="5" false */}


// // // // console.log(5===5);


// // // // logical operators 

// // // // and &&  true && true = true

// // // // or  ||   true || false = true

// // // // not  !  true = false / false = true



// // // // let ageBen = 10
// // // // console.log(ageBen>=18 && ageBen<=30);

// // // // console.log(ageBen === 10);



// // // // concatenation /

// // // // let str1 =  "RCB"
// // // // let str2 = "get the cup last year"

// // // // console.log(str1+" "+str2);

// // // // template string 

// // // // console.log(`who is last year win the IPL : ${str1} ${str2}.`)


// // // // type convertion

// // // // 1.implicit type convertion 
// // // // 2. explicit type converstion 

// // // // 1. explain 

// // // // let str5 = "123"
// // // // let num2 = 123

// // // // console.log((10-"67"));

// // // // 2. explain

// // // // console.log(Boolean());




// // // // 1.conditional statement (if, if-else,if else else-if,nested if , switch, ternary operator)
// // // // 2.looping statement (for , while , do while , for of , for in)



// // // // 1. explain 

// // // // if (false) {
// // // //     console.log("hi")
// // // // }

// // // // if(false){
// // // //     console.log("hello")
// // // // }else{
// // // //     console.log("namste")
// // // // }

// // // // if(false){
// // // //   console.log("1");
  
// // // // }else if(0){
// // // //  console.log("2");
 
// // // // }else{
// // // //     console.log("3");
    
// // // // }

// // // // if(true){
// // // //     if(true){
// // // //         if(true){
// // // //             console.log("selected")
// // // //         }else{

// // // //         }
// // // //     }else{

// // // //     }
// // // // }else{

// // // // }

// // // // let time = new Date 
// // // // let hour = time.getHours();
// // // // if(hour >= 1 && hour <= 6){
// // // //     console.log("early morning");
    
// // // // }else if(hour >= 7 && hour <= 12){
// // // //     console.log("morning")
// // // // }else if(hour >= 13 && hour <= 15){
// // // //     console.log("afternoon");
    
// // // // }else if(hour >= 16 && hour <= 18){
// // // //     console.log("evening");
    
// // // // }else{
// // // //     console.log("good night");
    
// // // // }
// // // // console.log(hour);

// // // // nested if example 


// // // // let age = 25;
// // // // let weight =50;
// // // // let height = 150;

// // // // if(age>=18 && age<=25){
// // // //     if(weight>=50){
// // // //         if(height>=150){
// // // //             console.log("your form submitted and your eligible")
// // // //         }else{
// // // //             console.log("your height is not eligible");
            
// // // //         }
// // // //     }else{
// // // //         console.log("your weight is not eligible.");
        
// // // //     }
// // // // }else{
// // // //     console.log("your age is not eligible");
    
// // // // }


// // // // ternary operator 

// // // // condition ? "statement" : "statement"

// // // // let age1 = prompt("enter your aget")

// // // // age1>=18 ? alert("eligible for vote") : alert("not eligible for vote");
// // // // ;


// // // // switch 

// // // // explain 

// // // // switch(){
// // // //     case value : statement ; break;
// // // //     case value : statement ; break;
// // // // }

// // // // let trafficLight = "blue"

// // // // switch(trafficLight){
// // // //     case "red" : console.log("stop");break;
// // // //     case "yellow" : console.log("start"); break;
// // // //     case "green" : console.log("go"); break
// // // //     case "" : console.log("go on the flow");break;
// // // // }

// // // // looping statement 


// // // // 1. for loop explain :

// // // // for (initialization , condition , iteration){

// // // // }

// // // // example : -

// // // // for(let i=0;i<=10;i++){
// // // //     console.log(i+"*2 = "+ i*2);  
// // // // }

// // // // while loop 
// // // // initialization
// // // // while(condition){
// // // //     statement
// // // //     iteration
// // // // }

// // // // let vile = 0

// // // // while(vile >=1){
// // // //     console.log(vile);
// // // //     vile-- 
// // // // }


// // // // initizalation
// // // // do{
// // // //     console.log(num);num++
    
// // // // }
// // // // while(condition)

// // // // let num=prompt("enter you age :-",0);
// // // // do{
// // // //     alert(`your age doesn't enough try later, your age just :-${num}`);num++
    
// // // // }
// // // // while(num>=18)

// // // // for of , for in

// // // // let a = [1,2,3,4,5]

// // // // for(let vignesh of a){
// // // //     console.log(vignesh*2);
    
// // // // }

// // // // for(let vignesh in a){
// // // //     console.log(a[vignesh]);
    
// // // // }

// // // // let a = [2,3,4,5,6,7,9,8]

// // // // for(let i=0;i<=a.length;i++){
// // // //    if(a[i]){
// // // //     if(a[i]===9){
// // // //         continue
// // // //     }
// // // //     console.log(a[i]);
// // // //    }
// // // // }


// // // // function one(a,b=200){
// // // //   console.log(a*b);
// // // // }

// // // // one(10,1)

// // // // function userData(uName,Uage=56){
// // // //    return uName+" "+Uage
// // // // }

// // // // var a = userData("kamal")
// // // // console.log(a);



// // // // var
// // // // let 
// // // // const

// // // // 1. function scope || global scope
// // // // 2.block scope
// // // // 3.block scope



// // // // var gScope = "var"
// // // // let Bscope = "let"
// // // // const bScope = "const"

// // // // console.log(window.gScope);
// // // // console.log(window.bScope);
// // // // console.log(window.Bscope);


// // // // var a=10
// // // // let b= 20
// // // // const c= 30

// // // // console.log(a+b+c);


// // // // function accessLocalVar(){
// // // //     let  a=100
// // // //     const b=200
// // // //     var c=300
    
    
// // // // }

// // // // accessLocalVar()



// // // // function types 


// // // // named function 

// // // // function name1(a,b){
// // // //     console.log("named function");
    
// // // // }
// // // // name1()

// // // // annonymous function 


// // // // var name2 = function(a,b){
// // // //     console.log("annoymous function");
    
// // // // }
// // // // name2()

// // // // arrow function 

// // // // var name3 =(a,b) => {
// // // //     console.log("arrow function");
    
// // // // }
// // // // name3()




// // // // /

// // // // uncurrying function

// // // // function add(a,b,c=20){
// // // //     console.log(a+b+c)

// // // // }

// // // // add(10,20);

// // // // currying function 

// // // // function curryingAdd(a){
// // // //     return function(b){
// // // //         return function(c=50){
// // // //             console.log(a+b+c);
// // // //         }
// // // //     }
// // // // }

// // // // curryingAdd(10)(20)(30);

// // // // self invoking function


// // // // (function(name,age){
// // // //     document.writeln(`hi ${name} your age is ${age}`);
// // // // })("vignesh",20);


// // // // generator function

// // // // function* abFunction() {
// // // //     yield "first";
// // // //     yield "second";
// // // //     yield "third";
// // // //     yield "fourth";
// // // // }

// // // // let gen = abFunction();

// // // // console.log(gen.next().value);
// // // // console.log(gen.next().value);
// // // // console.log(gen.next().value);
// // // // console.log(gen.next());
// // // // console.log(gen.next());



// // // // 

// // // // function* url(){
// // // //     yield "https://www.google.com";
// // // //     yield "https://www.facebook.com";
// // // //     yield "https://www.youtube.com";
// // // //     yield "https://www.instagram.com";
// // // // }

// // // // let genUrl = url();
// // // // console.log(genUrl.next().value);
// // // // console.log(genUrl.next().value);
// // // // console.log(genUrl.next().value);
// // // // console.log(genUrl.next().value);
// // // // console.log(genUrl.next().value); // undefined, as there are no more values to yield


// // // // dataStructues Array and objects

// // // // homogenous (same data type) and hetrogenous (different data type)

// // // // 1.array litral

// // // // let arr = [1,2,3,4,5,"vignesh",,,{name:"vignesh",age:20}]

// // // // console.log(arr[8]);

// // // // 2. array constructor/

// // // // let arr1 = new Array()

// // // // arr1[0]=10
// // // // arr1[1]=20
// // // // arr1[2]="hello"
// // // // arr1[3]=true
// // // // arr1[4]={name:"vignesh",age:20}

// // // // console.log(arr1);


// // // // // object 

// // // // let object1 = {
// // // //     uName  : "vignesh",
// // // //     uAge : 20,
// // // //     uGender : "male",
// // // //     eat : function(){
// // // //         console.log("eating food");
// // // //     },
// // // // }

// // // // console.log(object1.uName);
// // // // console.log(object1.uAge);
// // // // console.log(object1.uGender);
// // // // object1.eat();



// // // // let vechile = {
// // // //     "vType" : "car",
// // // //     "vName" : "audi",
// // // //     "vColor" : ["red", "blue", "black"],
// // // //     vYear : 2020
// // // // }

// // // // console.log(vechile.vName);
// // // // console.log(vechile["vType"]);
// // // // console.log(vechile["vColor"][0]);
// // // // console.log(vechile.vColor[1]);


// // // // function getData(){
// // // // let pName ="navin"
// // // // let pAge = 20
// // // // let id = document.getElementById("index").value;

// // // // let person = {
// // // //     name: pName,
// // // //     age: pAge,
// // // //     id: id,
// // // // }

// // // // console.log(person);

// // // // }


// // // // Array
// // // // String
// // // // Object
// // // // function


// // // // for loop 

// // // // Array

// // // // let arr = [10,20,30,40]

// // // // for(let i=0;i<7;i++){
// // // //   console.log(arr[i]);
  
// // // // }


// // // // string 

// // // // let str ="java script"

// // // // for(let i=0;i<11;i++){
// // // //   console.log(str[i]);
// // // // }


// // // // for of loop 

// // // // Array,string,function 



// // // // Array \

// // // // let arr1 = ["apple","banana","cherry","date","elderberry"];

// // // // for(let vignesh of arr1){
// // // //     console.log(vignesh);
    
// // // // }


// // // // string  

// // // // let str1 = "hello world";

// // // // for(let char of str1){
// // // //     console.log(char+" "+"happy");
    
// // // // }


// // // // function 

// // // // function*genFun(){
// // // //     yield "first";
// // // //     yield "second";
// // // //     yield "third";
// // // //     yield "fourth";
// // // // }

// // // // let gen = genFun();

// // // // for(let extra of gen){
// // // //     console.log(extra);
    
// // // // }




// // // // for in loop 

// // // // object 

// // // // let person1 = {
// // // //     uName : "vignesh",
// // // //     hobbies : ["cricket","football","coding"],
// // // //     family : {
// // // //         totalMembers : 5,
// // // //         Sibilings : ["a","b"]
// // // //     },
// // // //     walk(){
// // // //         console.log("walking");
// // // //     }
// // // // }

// // // // es6 after

// // // // 1.spread operator
// // // // 2.rest operator


// // // // 1. spread operator 

// // // // array [...]

// // // // object {...}

// // // // *two array or object merge and clone.

// // // // 2 . rest operator 

// // // // function (...)

// // // // * function multiple and parameter store 


// // // // spread operator 

// // // // let arr3 = ["apple","banana","cherry"];
// // // // let arr4 = ["date","elderberry","fig","grape"];


// // // // let arr5 = [...arr3,...arr4,"kiwi","lemon"];
// // // // arr5[0] = "orange";
// // // // arr5[1] = "graph";

// // // // console.log(arr5);

// // // // object 

// // // // let empDetials = {
// // // //         empId : "E001",
// // // //         empName : "John Doe",
// // // //         empRole : "Software Engineer"
// // // // }

// // // // let empDetials1 ={
// // // //     empId : "E002",
// // // //     empName : "Jane Smith",
// // // //     empRole : "Project Manager"
// // // // }

// // // // let empTotal = {
// // // //     ...empDetials,
// // // //     ...empDetials1,
  

// // // // }

// // // // console.log(empTotal);


// // // // rest operator 

// // // // 1. function 

// // // // function restoperator(...arr){
// // // //     console.log(arr);
    
// // // // }

// // // // restoperator(1,2,3,4,5,6,7,8,9,10);

// // // // destructuring 

// // // // es6 version after /

// // // // normal array 

// // // // let arr = [10,20,30,40]

// // // // let final = arr[3]

// // // // console.log(final);

// // // // destructuring 

// // // // let arr1 = [100,200,300,400]

// // // // let [a,b,c,d] = arr1

// // // // console.log(a,b,c,d);
// // // // console.log(a,c);


// // // // let arr2 = [10,20,30,40,100,200,300,400]

// // // // let [a1,a2,a3,...e1]=arr2

// // // // console.log(a1,a2,a3,e1);



// // // // let arr3 = [10,20,30,[100,200,300]]

// // // // let [b1,b2,b3,[c1,c2,c3]]=arr3

// // // // console.log(b1,b2,b3,c1,c2,c3);

// // // // arr.method manipulate 


// // // // 1.push last add 
// // // // 2.pop last remove 
// // // // 3.shift first remove 
// // // // 4.unshift first add 
// // // // 5. splice


// // // // let fruit = ["apple","orange","banana"]

// // // // fruit.push("guava","pomagranate")
// // // // console.log(fruit);

// // // // let things = ["pencil","pen","paint","board"]

// // // // things.pop()

// // // // console.log(things);


// // // // let fruits = ["banana","carrot"]

// // // // fruits.unshift("apple","apple")

// // // // console.log(fruits);

// // // // fruits.shift()

// // // // console.log(fruits);



// // // // splice 

// // // // splice(indexStarting,delete count,adding)

// // // // let add = [100,200,300,400]

// // // // add.splice(1,1,10)

// // // // console.log(add);


// // // // -----------------manipulate 


// // // // merge array 

// // // // 1.concat 
// // // // 2.slice 
// // // // 3.flat 
// // // // 4.fill

// // // // concat 
// // // // let array1 = [1,2,3,4]
// // // // let array2 = [5,6,7,8]

// // // // let newArr = array1.concat(array2)

// // // // console.log(newArr);

// // // // slice 

// // // // let array3 = [10,2,3,4,5]

// // // // let sliceVal = array3.slice(0,4)

// // // // console.log(sliceVal);

// // // // flat 

// // // // let nestedArr = [1,[2,3,[4,[5,6]]]]

// // // // let normalArr = nestedArr.flat(Infinity)

// // // // console.log(normalArr);

// // // // fill 

// // // // let  arrr = [10,20,30]
// // // // arrr.fill("gdgdt",1,3)

// // // // fill(addingElement,si, Ei)

// // // // console.log(arrr);


// // // // asscii value 

// // // // sort 
// // // // 1,111,111111111,2,3456,4,4,5,6,8
// // // // let as = [5,4,6,2,8,1,111,11111111,3426,4,true," ","!"]

// // // // as.sort() 
// // // // console.log(as);


// // // // as.reverse()

// // // // console.log(as);


// // // // includes 

// // // // let arr1 = [10,20,30,40]

// // // // arr1.includes(10)

// // // // console.log(arr1.includes(12));

// // // // arr to string

// // // // join 

// // // // let arr = [1,2,3,4]

// // // // let strVal = arr.join()

// // // // console.log(strVal);


// // // // indexof 

// // // // let Index = [6,3,9,7,87,5,9,5,5,"uygj",0,988]

// // // // let findIndex = Index.indexOf(3,3)

// // // // console.log(findIndex);

// // // // lastIndexOf 

// // // // let LastIndex = Index.lastIndexOf(10,-1)
// // // // console.log(LastIndex);








// // // // higher order method 

// // // // 1.forEach()
// // // // 2.map()

// // // let fruit = ["apple","orange","banana"]

// // // fruit.forEach(printFruit)

// // // function printFruit(currentElement,index,totalArray){
// // //     console.log(currentElement,index,totalArray);
// // // }


// // // let fruits = ["apple","banana"]

// // // fruits.map(function(cEle,Index,totArr){
// // //     console.log(totArr);
    
// // // })


// // // // difference 

// // // let newArr1 = fruits.forEach((cEle,ind,totalArr) => {
// // //   return(cEle);
  
// // // })

// // // console.log(newArr1);
// // // let newArr = fruits.map((cEle,ind,totalArr) => {
// // //   return(cEle);
  
// // // })

// // // console.clear(newArr);


// // // // let example = [10,20,30,10,7,17,10]

// // // // let findIndex = example.indexOf(10,0)

// // // // console.log(findIndex);

// // // // let lastIndex = example.lastIndexOf(10,- 1)

// // // // console.log(lastIndex);


// // // // 3.filter()

// // // // 4.find()


// // // // filter 

// // // // let employees = [
// // // //   {empName : "abc",salary : 10000},
// // // //   {empName : "def", salary : 20000},
// // // //   {empName : "ghi" , salary : 30000}
// // // // ]

// // // // let highestSalary = employees.filter(cEle => cEle.salary > 10500)

// // // // console.log(highestSalary);

// // // // find 

// // // // let find = employees.find(cEle=>
// // // //    cEle.salary>10000)

// // // // console.log();


// // // // higher order method function 

// // // // 1 sort 
// // // // 2 some 
// // // // 3 every 


// // // // sort 

// // // // let arr = [10,5,100,30,6,2]

// // // // arr.sort() 

// // // // console.log(arr);


// // // // let newSort = arr.sort((a,b)=>{
// // // //   return b-a
// // // // })

// // // // console.log(newSort);


// // // // // 2. some - logical or || - true false = true

// // // // let arr1 = [1,1,1,1,1]

// // // // let value = arr1.some((c,i,ta)=>{
// // // //   return c % 2 == 0
// // // // })

// // // // console.log(value);

// // // // 3.every - logical and && - true true = true

// // // // let valueAnd = arr1.every((current,ind,toArray)=>{
// // // // return current%2==0
// // // // })

// // // // console.log(valueAnd);


// // // // reduce  

// // // // adding use to loop 

// // // // let arr2 = [1,2,3,4,5]


// // // // let totalVal = 0


// // // // for(let i=0;i<arr2.length;i++){
// // // //  totalVal = totalVal + arr2[i]
// // // // }

// // // // console.log(totalVal);


// // // // reduce syntex 

// // // // let total = arr2.reduce((acc,cEle,index,totalArray)=>{
// // // //   return acc + cEle
// // // // },2)

// // // // console.clear(total);


// // // // string method 


// // // // let b = "javascript"

// // // // charAt - index > character 


// // // // console.log(b.charAt(b.length-1));


// // // // charCodeAt - find asscii value

// // // console.log(b.charCodeAt(1))

// // // // includes 

// // // // console.log(b.includes("j",1));

// // // // indexof 

// // // console.log(b.indexOf("a"));

// // // // lastIndexOf 

// // // console.log(b.lastIndexOf("a",));

// // // //repeat 

// // // console.log(b.repeat(6));


// // // //replace 

// // // console.log(b.replace("j","Js-j"));

// // // //slice 

// // // console.log(b.slice(2,6));

// // // //split

// // // let c = "i am a iron-man"

// // // console.log(c.split(" "));

// // // // startwITH 

// // // console.log(b.startsWith("j"));

// // // //endwith

// // // console.log(b.endsWith("t"));

// // // // uppercase 

// // // console.log(b.toUpperCase());

// // // //lowercase 
// // // console.log(b.toLowerCase());

// // // let d = " hello-world "

// // // // trim 

// // // console.log(d.trim());

// // // // trim-left 

// // // console.log(d.trimStart());

// // // // trim -right 

// // // console.clear(d.trimEnd());


// // // // math - object
// // // // n-p

// // // let e = Math.abs(-1000)
// // // console.log(e);

// // // // n=-1, p=+1
// // // e=Math.sign(-1000)
// // // console.log(e);


// // // e=Math.sqrt(25)
// // // console.log(e);



// // // e=Math.cbrt(8)
// // // console.log(e);

// // // // pow - (num,power) = print 

// // // e=Math.pow(7,6)
// // // console.log(e);

// // // // min -  noted and print min num /


// // // e=Math.min(7,6,8,2)
// // // console.log(e);

// // // // max - noted the list print max num 

// // // e=Math.max(7,6,8,2)
// // // console.log(e);

// // // // random - print random num 

// // // e = Math.random()*10+1
// // // console.log(e);

// // // // ceil - max - value print dec 

// // // e = Math.ceil(2.4)
// // // console.log(e);

// // // // floor - min value print decimal 

// // // e = Math.floor(2.3)
// // // console.log(e);

// // // // round - 0 to 4 min val 5-9 max val decimal 

// // // e = Math.round(2.5)
// // // console.log(e);


// // // // trunc - decimal remove /


// // // e = Math.trunc(7.008989898989878)
// // // console.clear(e);



// // // // date object 


// // // let date = new Date

// // // console.log(date);

// // // // year 

// // // console.log(date.getFullYear());

// // // //month

// // // console.log(date.getMonth()+1);

// // // //date 

// // // console.log(date.getDate());

// // // //day

// // // console.log(date.getDay());

// // // //hours

// // // console.log(date.getHours());

// // // //minutes

// // // console.log(date.getMinutes());

// // // console.log(date.getSeconds());





// // // // manipulation of date 
// // // date.setFullYear(2000)
// // // console.log(date);

// // // date.setMonth(8)

// // // console.log(date);

// // // console.log(date.toDateString());
// // // console.log(date.toISOString());
// // // console.log(date.toLocaleString());
// // // console.log(date.toLocaleTimeString());
// // // console.clear();


// // // // asynchronous and  synchronous 


// // // function one(){
// // //   console.log("one");
  
// // // }
// // // function two(){
// // //   console.log("two");
  
// // // }
// // // function three(){
// // //   console.log("three");
  
// // // }

// // // one()
// // // // setTimeout(two,500)
// // // three()

// // // for(let i=1;i<11;i++){
// // //   console.log(i);
  
// // // }

// // // // setTimeout(()=>{
// // // //   let time  = new Date

// // // // let timeOnly = time.toLocaleTimeString()

// // // // console.log(timeOnly);
// // // // },1000)
// // // // setInterval(()=>{
// // // //   let time  = new Date

// // // // let timeOnly = time.toLocaleTimeString()

// // // // console.log(timeOnly);
// // // // },1000)


// // // // promise - micro task

// // // // 1.resolve. 
// // // // 2.reject .
// // // // 3.bending 


// // // // let newPromise = new Promise((resolve,reject,bending)=>{
// // // // let dataRecevied = true;
// // // //   if(dataRecevied){
// // // //     resolve("data received successfully")
// // // //   }else{
// // // //     reject("data not received")
// // // //   }
// // // // })

// // // // newPromise
// // // // .then((message)=>{
// // // //    console.log(`finally result : ${message}`);
   
// // // // })
// // // // .catch((error)=>{
// // // // console.log(`finally result : ${error}`);
// // // // })

// // // // .finally(()=>{
// // // //   console.log("end");
  
// // // // })


// // // // api calling method 

// // // // fetch('https://fakestoreapi.com/products/1')

// // // // .then((responce)=>{
// // // //   return responce.json()
// // // // })
// // // // .then((data)=>{
// // // //   console.log(data);
  
// // // // })
// // // // .catch((error)=>{
// // // //   console.log(error);
  
// // // // })

// // // // console.clear()


// // // // let a = "javascript"
// // // // console.log(a);
// // // // console.log(a);


// // // // function one() {
// // // //   console.log("one");
  
// // // // }

// // // // function two() {
// // // //   console.log("two");
  
// // // // }

// // // // setTimeout(one,1000)

// // // // two()


// // // // DOM API 

// // // // DOM - DOCUMENT OBJECT MODEL 


// // // Dom techniques 

// // // 1.selecting element

// // // 2.traversing element 

// // // 3. manipulating element 



// // // selecting element 
// // let a = document.getElementsByTagName("h1")

// // let b = document.getElementsByClassName("content1")

// // let c = document.getElementById("content3")

// // let d = document.getElementsByName("content1")

// // let e = document.querySelector("p")

// // let f = document.querySelectorAll(".one")

// // console.log(e);

// // console.log(f);

// // console.log(d);




// // // traversing Element / 


// // // let child1 = document.querySelector(".child1")
// // // console.log(child1);

// // // console.log(child1.parentElement);

// // // let child2 = document.querySelector(".child2")

// // // console.log(child2.parentNode);

// // // node - elementNode , attriputeNode ,textNode 

// // // child 

// // // function child(){
// // //   let getChild = document.querySelector(".hello")
// // //   console.log(getChild.childElementCount);
// // //   console.log(getChild.childNodes);
// // //   console.log(getChild.children);
// // //   console.log(getChild.firstChild);
// // //   console.log(getChild.firstElementChild);
// // //   console.log(getChild.lastChild);
// // //   console.log(getChild.lastElementChild); 
// // // }

// // // child()

// // let getchild = document.querySelector(".hello")
// // console.log(getchild.childNodes);

// // // sibling 

// // // function selectSiblings(){
// // //  let child1 = document.querySelector(".child1")
// // //  console.log(child1.nextSibling);
// // //  console.log(child1.nextElementSibling);
// // //  console.log(child1.previousSibling);
// // //  console.log(child1.previousElementSibling);
 
 
// // // }



// // // let button = document.querySelector("button")

// // // addEventListener


// // // button.addEventListener("click",()=>{
// // //   console.log("vignesh");
  
// // // })

// // //eventHandler 


// // let hello = ()=>{
// //   console.log("vignesh");
  
// // }
// // let hi = ()=>{
// //   console.log("javascript");
  
// // }


// // button.addEventListener("click",()=>{
// //   console.log("one");
  
// // })

// // button.addEventListener("click",()=>{
// //   console.log("two");
  
// // })
// // button.addEventListener("click",()=>{
// //   console.log("three");
  
// // })


// let button = document.querySelector("button")


// button.addEventListener("click",()=>{
//   let input = document.querySelector("input")
//   let ol = document.querySelector("ol")

//   let inputVal = input.value

//   let li = document.createElement("li");

//   li.textContent = inputVal

//   ol.append(li)




// })


// // calculator 



// // function clicking(hello) {
// //   let inputValue = document.getElementById("input")
// //   let inputt = inputValue.value
  
// //   inputt += hello
  
// // }
  
// // vowels counter 



// function vowelsFinder(){

// }

// let a = "javascript"
// let b = vowelsFinder(a)
// console.log(b);



function vowelsFinder(hi){
  let vowels = "aeiouAEIOU";
  let count = 0

  for(let i=0;i<hi.length;i++){
    if(vowels.includes(hi[i])){
      console.log(hi[i]);
      count++
      
    }
  }
return count
}

let a = "hello world i am the iron man"
let b = vowelsFinder(a)
console.log(b);


let 













































