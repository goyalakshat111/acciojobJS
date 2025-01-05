// 16 dec
// Recursion - when function calls itself

// example 1- Infinite loop
// function hello(){
//     console.log('hello world')
//     hello()
// }
// hello();

// example 2- printing 5, returning undefined
// function print(){
//     console.log(5)                             
// }
// console.log(print())                          //   5 undefined;

// ******************************************************************

// printing wale questions

// ques- decrease print
// function q1(n){
//     //    base condition
//     if(n==0){
//         return;
//     }
//     console.log(n)
//     q1(n-1)
// }
// q1(5)          // 5 4 3 2 1 


// ques- inrease print
// function q2(n){
//     // base condition
//     if(n==0){
//         return;
//     }
//     q2(n-1)
//     console.log(n)
// }
// q2(5)              // 1 2 3 4 5 

//ques - decrease print increase print
// function q3(n){
//     if(n==0){
//         return 0;
//     }
//     console.log(n)
//     q3(n-1)
//     console.log(n)
// }
// q3(4)                           // 4 3 2 1 1 2 3 4

// ************************************************************

// return wale questions

// ques - 
// function q(n){
//     if(n==0){
//         return 0;
//     }
//     return n + q(n-1)
// }
// let x = q(3)
// console.log(x)

// ques -
// function sumOfEvenDigits(n,sum=0){
//     if(n==0){
//         return sum;
//     }
//     let lastDigit = n%10;
//     if(lastDigit%2==0){
//         sum += lastDigit;
//     }
//     return sumOfEvenDigits(parseInt(n/10),sum)
// }
// let x = sumOfEvenDigits(3256)
// console.log(x)

// *******************************************************************

// ques - function calling itself twice inside

function q(n){
    if(n==0){
        return 0;
    }
    q(n-1)
    console.log(n);
    q(n-1)
}
q(3)                                    // 1 2 1 3 1 2 1



