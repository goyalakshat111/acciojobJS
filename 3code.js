// 14 nov

// let n = 18;

// check if it is div by 5 or not

// if(n%5==0){
//     console.log("it is divisible by 5");
// }
// else{
//     console.log("it is not divisible by 5");
// }

// check if it is even or odd

// if(n%2==0){
//     console.log("Even");
// }
// else{
//     console.log("odd");
// }

// Take two number and check if their sum and product are same or not

// let a = 2
// let b =3

// if(a+b == a*b){
//     console.log("same");
// }
// else{
//     console.log("not same")
// }

// Take 2 digit number and check if it is palindrome or not

// let n = 21

// temp= n%10;
// n = parseInt(n/10);

// reverse = n*10 + temp;

// if(n== reverse){
//     console.log("it is palindrome")
// }
// else{
//     console.log("not palindrome")
// }


// take 3 digit number and check if it is palindrome or not

// let n = 292
// let firstDigit = n % 10;
// let lastDigit = parseInt(n/100)
// if (firstDigit==lastDigit){
//     console.log("palindrome")
// }
// else{
//     console.log("not palindrome")
// }

// take 3 number and print the biggest number
// let a = 10
// let b = 30
// let c = 20

// if(a>b && a>c){
//     console.log(a)
// }
// else if(b>a && b>c){
//     console.log(b)
// }
// else{
//     console.log(c)
// }


//take a number and check if it is decimal or not

// let num = 10.0005
// let n = parseInt(num)
// if(num == n){
//     console.log("not decimal")
// }
// else{
//     console.log("decimal")
// }

// take a number. print "hello" if divisible by 3 , print "world" if divisible by 5 , print 
//"hello world" if divisible by 15

// let n = 45
// if(n%3==0 && n%5==0){
//     console.log("hello world")
// }
// else if(n%5==0 ){
//     console.log("world")
// }
// else if(n%3==0){
//     console.log("hello ")
// }

// or

// if(n%15 ==0){
//     console.log("hello world")
// }
// else if(n%3==0){
//     console.log("hello")
// }
// else if(n%5==0){
//     console.log("world")
// }


// convert 24 hr to 12 time

// let hr = 22
// let min = 45

// if (hr>12){
//     console.log(hr-12, min, "PM")
// }
// else if (hr==0){
//     console.log(hr,min,"AM")
// }
// else if(hr<12){
//     console.log(hr,min,"AM")
// }
// else if(hr==12){

//     console.log(hr, min,"PM")
// }


// bijli ka bill
// Enter number of electricity units consumed and calculate amount to pay, based on the rules below
// For first 50 units, Rs: 1/unit
// For next 100 units, Rs.2/unit
// For next 100 units, Rs. 3/ units
// For units above 250, Rs.4/units
// For all bills above 150 rupees additional surcharge of 20% of total bill amount is added.

let unit = 300
let bill;

if(unit<=50){
    bill = unit;
    console.log("bill is",bill);
}
else if( unit<=150){
    bill = 50 + (unit-50)*2;
    if(bill<=150){
        console.log("bill is",bill)
    }
    else{
        console.log("bill is", bill + 0.2*bill)
    }
}
else if(unit<=250){
    bill = 250 + (unit - 150)*3;
    console.log("bill is", bill + 0.2*bill);
}
else{
    bill = 550 + (unit-250) *4;
    console.log("bill is", bill + 0.2*bill);
}