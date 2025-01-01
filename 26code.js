// 26 dec
// callback

// Function is a datatype in javascript. It is a non primitive datatype as function is also an
// object like array,map.

// Normal function

// function greet1(){
//     console.log("hello world")
// }

// console.log(greet1)

// Arrow function - Introduced in ES6, An arrow function is a shorter syntax for writing functions 

// let greet2 = ()=>{
//     console.log("hello world")
// }

// console.log(greet2)

//Summary is after seeing arrow function, we can say function is also a datatype like number,
//array, object etc. because it has also variable and value.

// ******************************************************************

// A Callback function is a function that is passed as an argument to another function and is 
// executed after the completion of some operation. Callbacks are commonly used to execute 
// asynchronous functions such as data fetching, event handling, and other time-consuming operations.

// In this example, the greet is a function that is a callback that is passed
// to the hello function.

// function hello(n,fun1){     // parameter
//     console.log(n);
//     console.log(fun1);
//     fun1();
// }

// let x1 = 100

// let greet = ()=>{
//     console.log("hello")
// }

// hello(x1,greet)             // argument

// **********************************************************************

// It's not a callback because here greet() is first called then passed, that's why not callback

// function hello(greet){
//     console.log('hello function starts');
//     console.log(greet)
// }

// function greet(){
//     console.log('good morning')
//     return 100
// }

// hello(greet())

// output - 
// good morning
// hello function starts
// 100

// ***************************************************************************

// not callback because first greet() is called then passed

// function hello(n,fun1){     // parameter
//     console.log(n);
//     console.log(fun1);
//     fun1();
// }

// let x1 = 100

// let greet = ()=>{
//     console.log("hello")
//     return 5000
// }

// hello(x1,greet())           // argument

// output - error

// *********************************************************************

// Function that has no name, is known as anonymous function

// callback because an arrow function is passed as an argument as it has no name, it's not called 

// function hello(fun1){
//     console.log(fun1)
//     fun1();
// }

// hello(()=>{console.log('hello')})

// *********************************************************************

// IIFE - Immediately invoked function expression - another way to write anonymous function

// (function(){
//     console.log('hello')
// })()

// *******************************************************************

// callback function sum with one or more parameters passed an an argument to HOF hello

// function hello(fun1){
//     console.log(fun1)
//     fun1()
// }

// function sum(a,b){
//     console.log(a+b)
// }

// hello(sum)

// Output -
// [Function: sum]
// NaN

// callback function sum with one or more parameters passed as anonymous arrow function to hello so that 
// it's not called 

// function hello(fun1){
//     console.log(fun1)
//     fun1()
// }
    
// function sum(a,b){
//     console.log(a+b)
// }
    
// hello(()=>{sum(10,20)})

// callback function sum with one or more parameters passed as IIFE to hello so that it's not called 

// function hello(fun1){
//     console.log(fun1)
//     fun1()
// }
    
// function sum(a,b){
//     console.log(a+b)
// }
// hello(function(){sum(10,20)})

// ******************************************************************

// Higher Order Function (HOF) -->  a higher-order function is a function that takes one or
//  more functions as arguments or returns a function or both

// example 1 - HOF hello taking callback greet as argument 

// function hello(fun1){
//     fun1()
// }

// let greet = ()=>{
//     console.log('good morning')
// }

// hello(greet)

// example 2 - HOF bye returning a function

// function bye(){
//     console.log('i am inside bye')
//     return function(){
//         console.log('hello')
//     }
// }

// let x = bye()
// x()

// or 

// bye()()

// example 3 - HOF bye returning a function, that function is also returning another function

// function bye(){
//     console.log('i am inside bye')
//     return function(){
//         console.log('hello')
//         return ()=>{
//             console.log('i am inside return')
//         }
//     }
// }

// bye()()()

// ***************************************************************

// normal function

//  function sum(a,b){
//     console.log('hello')
//     return a+b
//  }
// console.log(sum(4,6))

// arrow function

//  let sum = (a,b)=>{
//     console.log('hello')
//     return a+b
//  }
// console.log(sum(4,6))

// arrow function having only return statement   (removed curly braces)

// let sum = (a,b)=>a+b
// console.log(sum(2,3));


// arrow function having only return statement and single parameter   (removed small braces also)

// let square = a=> a*a
// console.log(square(5))

// ****************************************************************

// amazing loops  - applies only on array. These all loops are higher order function as they take
// function as argument

// forEach 

// ex - 1

// let arr = [10,20,30,40,50]

// arr.forEach(display)
 
// function display(value, index){
//     console.log(value,"->", index)
// }

// ex - 2

// let arr  = [1,2,3,4,5]

// arr.forEach(display)

// function display(value){
//     console.log(value*value)
// }

// or

// let arr  = [1,2,3,4,5]
// arr.forEach(value=>{console.log(value*value)})


// map - returns an array

// ex - 1
// let arr = [10,20,30,40,50]

// let x = arr.map(display)

// function display(value,index){
//     return value*value
// }
// console.log(x)

// or

// let x = arr.map(value=> value*value)
// console.log(x);

// ex - 2 

// let arr = [1,2,3,4,5]

// let y = arr.map(display)

// function display(value){
//     if(value%2==0){
//         return value;
//     }
// }
// console.log(y)


// filter - return an array containing elements that satisfies condition

// ex - 1

// let arr = [1,2,3,4,5]

// let x = arr.filter((value)=> value%2==0)
// console.log(x);

// ex - 2

// let arr = [10,0,-10,-20,5]

// let y = arr.filter(value=> value)
// console.log(y)

// ex - 3 palindrome

// let first_name = ['akshat', 'naman', 'madam', 'rajat', 'sunny']

// let x = first_name.filter(value=>value == value.split('').reverse().join(''))
// console.log(x)

// find - return first value that satisfies condition

// ex - 1 palindrome

// let first_name = ['naman', 'rajat', 'sunny']

// let x = first_name.find(value=>value == value.split('').reverse().join(''))
// console.log(x)

// ex - 2 find fruit name whose id = 2

// let arr = [
//     {id:1,name:'apple'},
//     {id:2,name:'mango'},
//     {id:3,name:'orange'}
// ]

// let x = arr.find(value=>value.id==2)
// console.log(x.name)

// ***********************************************************************************

// ques - 

let sellers = [
    {id:1, name:'Ramesh', profit:1000, loss:500},
    {id:2, name:'Suresh', profit:2000, loss:10000},
    {id:3, name:'Rajesh', profit:3000, loss:1500},
    {id:4, name:'Rakesh', profit:4000, loss:6000},
    {id:5, name:'Nikhil', profit:5000, loss:20000},
]


// let x = sellers.filter(value=> value.profit<value.loss) // return array of object where profit<loss
// console.log(x.map(value=>value.name))            // return an array of name where profit<loss

// or

console.log(sellers.filter(value=> value.profit<value.loss).map(value=>value.name))