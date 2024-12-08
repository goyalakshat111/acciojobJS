// 19 nov

// while loop

// take a number and print its digits

// let n = 1234

// while(n!=0){
//     let digit = n%10
//     console.log(digit)
//     n = parseInt(n/10)
// }

// or

// for(let i=n;i>0; i= parseInt(i/10)){
//     let digit = i%10
//     console.log(digit)  
// }

// count number of digits in a given number

// let n = 2341
// let count =0
// while(n!=0){
//     count ++;
//     n = parseInt(n/10)
// }
// console.log(count)


// reverse the given number 4687 --> 7864

// let n = 4687
// let rev =0
// while(n!=0){
//     let digit = n%10
//     rev = rev*10 +digit
//     n = parseInt(n/10)
// }
// console.log(rev)

// checkPalindrome

// let n = 12321
// let oldNum = n
// let rev =0
// while(n!=0){
//     let digit = n%10
//     rev = rev*10 +digit
//     n = parseInt(n/10)
// }
// if(oldNum == rev){
//     console.log("Palindrome")
// }
// else{
//     console.log("Not palindrome")
// }



// print the digits of number from left to right 

let a = 1234
let divisor = 1

while(a/divisor>=10){
    divisor*=10
}
while(divisor>0){
    let digit = parseInt(a/divisor);
    console.log(digit)
    a = a%divisor
    divisor = parseInt(divisor/10)
}


