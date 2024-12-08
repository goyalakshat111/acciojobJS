// 11 nov

// JS has 3 most used primitive datatype
// Number - for both integer and float
// String - for both character and string
// Boolean - true, false

// For string, both single '' and double "" ticks are same
// For string, back tick`` is also used
// e.g.,
// interpolation in js

// a = 100
// b= 200
// sum = a+b
// console.log(`Value of ${a} and ${b} is ${sum}`)         // backtick 

// to find datatype, use typeof function (returns a string)
// let a = 6
// console.log(a, typeof a)


//To put decimal after number, use toFixed() function & To remove decimal, use parseInt()
// let p = 100000
// let r = 10
// let t =5

// let amt = p * (1+ r/100)**t

// let ci = amt - p
// console.log(ci)
// console.log(ci.toFixed(2))        // to round off upto 2 decimal values
// console.log(parseInt(ci))         // to remove decimal and keep only integer



// To round off values, use Math.round() 

// Use Math.floor() to find minimum value after removing decimal 
// let i= 2.99
// console.log(Math.floor(i))

// Use Math.ceil() to find maximum value after removing decimal 
// let j= 2.1
// console.log(Math.ceil(j))

// Use Math.min(n1,n2,n3,n4) to find minimum value in n arguments
// Use Math.max(n1,n2,n3,n4) to find maximum value in n arguments

let n1 = 1, n2 = 2, n3 = 3, n4 = 4;

let max = Math.max(n1,n2,n3,n4);
let min = Math.min(n1,n2,n3,n4);
console.log(max,min);