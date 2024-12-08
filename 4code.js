// 15 nov

// local and global variable

// let a = 100
// console.log(a)
// if(2>1){
//      a = 500                                // anyone can acess and change global variable
//     console.log(a)
// }
// console.log(a)

// nested if

// ques - Take a 2 digit number, if it is even, find sum of digit and check if it is divisible by 5.
// If it is odd, find product and check if it is divisible by 8

// let num = 83
// let firstDigit = num%10
// let lastDigit = parseInt(num/10)

// if(num%2==0){
//     let sum = firstDigit+lastDigit
//     if(sum%5==0){
//         console.log("div by 5");
//     }
//     else{
//         console.log("not div by 5")
//     }
// }
// else{
//     let prod = firstDigit* lastDigit
//     if(prod%8==0){
//         console.log("div by 8")
//     }
//     else{
//         console.log("not div by 8")
//     }
// }


// take 3 angles of triangle and if angles form valid triangle then check if it is isoscels or not
// let a = 60
// let b =60
// let c = 60

// if(a+b+c == 180 && a>0 && b>0 && c>0){
//     if((a==b && a!=c) || (b==c && b!=a)||(c==a && c!=b)){
//         console.log("Triangle is valid and isosceles")
//     }
//     else{
//         console.log("Triangle is valid but not isosceles")
//     }
// }
// else{
//     console.log("Not valid triangle")
// }


// find second biggest number from three number
// let p = 187
// let q = 200
// let r = 39

// if(p>q && p>r){
//     console.log("p is biggest")
//     if(q>r){
//         console.log("q is second biggest")
//     }
//     else{
//         console.log("r is second biggest")
//     }
// }
// else if(q>r && q>p){
//     console.log("q is biggest")
//     if(p>r){
//         console.log("p is second biggest")
//     }
//     else{
//         console.log("r is second biggest")
//     }
// }
// else if(r>q && r>p){
//     console.log("r is biggest")
//     if(q>p){
//         console.log("q is second biggest")
//     }
//     else{
//         console.log("p is second biggest")
//     }
// }
