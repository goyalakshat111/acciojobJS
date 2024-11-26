// 26 nov

// scope
// variable initialize inside braces = local variable
// variable initialize outside braces = global variable 


// let a = 100
// if(10<100){
//     a=10                            
//     let b = 20                      
    
// }
// console.log(a)
// // console.log(b)                     // error - b is not defined - can't access outside local scope

//***************************************************************** 


// let - var
// let is block scoped variable
// var only respects function scope
// undeclared variable is true global variable

// function hello(){
//     let a =100
//     var b = 200
//     c = 30
// }
// hello()

// // console.log(a)         // error = a is not defined
// // console.log(b)        // error = b is not defined
// console.log(c)        // c is true global variable


// ************************ Hoisting in JS *********************************

// // console.log(a)        // error - can't access a before initialization
// let a = 10
// console.log(a)

// Hoisting in var

// console.log(b)              // undefined
// var b = 20
// console.log(b)



// var a =100
// var a = 200                  // no error



// // console.log(a)               // error - a is not defined
// function test(){
//     console.log(a)    // undefined
//     var a = 200
//     console.log(a)    // 200
// }
// test()
// // console.log(a)          // error - a is not defined


// Hoisting in let

// // console.log(a)       // error - can't access a before initialization (temporal dead zone)
// let a = 100

// function hello(){
//     function display(){
//         console.log(age)
//     }

//     let age =10
//     display()
// }
// hello()                              // 10


// function hello(){
//     function display(){
//         console.log(age)
//     }

//     let age =10
//     display()
// }
// hello()                          // can't acess age before initialization

// Scope Chaining

// let a = 100
// if(10>5){
//     console.log(a)   //100
//      a = 200
//     console.log(a)  // 200
// }
// console.log(a)  // 200


// let a = 100
// if(10>5){
//     // console.log(a)   //error - can't access a before initialization
//      let  a = 200
//     console.log(a)  // 200
// }
// console.log(a)  // 100


// function

// default parameter

// function hello(a="apple", b ="mango"){     //parameter
//     console.log(a,b)
// }
// hello(10)  // argument

// function print(a,b){
//     a = 1000
//     b = 2000
//     console.log(a,b)       // 1000,2000
// }
// let a = 100
// let b = 200
// print(a,b)
// console.log(a,b)      // 100,200

// ******************* Ternary ***************************
// condition?    :

// let n =12
// n%2==0?console.log("Even"):console.log("odd")
// or
// console.log(n%2==0?"even":"odd")
// or 
// let x = n%2==0?"even":"odd"
// console.log(x)

// let n = 0
// n>0?console.log("+ve") : (n<0?console.log("-ve"):console.log("zero"))


// find largest between a,b,c

let a=100
let b =200
let c =30
let ans =a>b?(a>c?a:c):(b>c?b:c)
console.log(ans)


