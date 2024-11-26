// 12 nov

// let n = 79


// // q1
// lastDigit = n%10
// console.log(lastDigit)

// // logic - firstDigit of 2 digit number

// let firstNum = parseInt(n/10)
// console.log(firstNum)
// // or 
// let firstDigit = (n - lastDigit )/ 10                // 79 = 7 * 10 + 9
// console.log(firstDigit)

// // q2

// let reverse = lastDigit * 10 + firstDigit
// console.log(reverse)



// // q3
// // reverse of 3 digit number

// let num  = 189

// let lastDigit = num % 10
// let first2Digit = parseInt(num/10)
// let midDigit = first2Digit % 10
// let firstDigit = parseInt(num/100) 
// let reverseNum = lastDigit*100+ midDigit*10 + firstDigit
// console.log(reverseNum)



// q4
// swap values
let a =10
let b = 20

// using third variable
// let temp = a
// a = b 
// b = temp

// using arithmetic operator
// a = a+b
// b = a-b
// a = a-b

// using XOR
// a = a^b
// b = a^b 
// a = a^b
// console.log(a, b)


// conditional operator <, > , >= , <= , == , ===, !=, !==

// = assignment operator
// ==  equal to operator (checks value only, not datatype)
// ===  triple equal to operator (checks both value and datatype)


// // Logical operator && (and) , || (or), !(not)

// // short circuiting in AND
// 10 < 5 && console.log("hello") // first statement is false so won't move forward, nothing will print

// // short circuiting in OR

// 10>5 || console.log("hello") // first statement is true so it won't move forward and hello not print
// 10<5 || console.log("hello")  // first statemnt is false so it'll move forward and hello print


// ques - check leap year
let n = 2100 // 2023, 2024, 2100
let ans = (n%4 ==0 && n%100 !=0) || ( n%400==0)
console.log(ans)