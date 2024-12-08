// 18 nov

// increment and decrement operator

// let a=5
// z= a++ + --a
// console.log(z)
// console.log(a)

// **********************************************************************

// for loop - all three loops answer would be same

// for(let i=1;i<=5;i=i+1){
//     console.log(i)
// }

// for(let i=1;i<=5;i++){
//     console.log(i)
// }

// for(let i=1;i<=5;++i){
//     console.log(i)
// }

// **************************************************************************

// prime number

// approach-1

// let a = 110
// let ans=true;
// if(a==2){
//   ans = true
// }
// if(a<2){
//   ans = false;
// }
// for(let i=2;i<a;i++){
//   if(a%i==0){
//     ans = false
//     break;
//   }
// }
// if(ans){
//   console.log('Prime')
// }
// else{
//   console.log('Non-prime')
// }

// approach-2

// let num=101
// let count=0;
// for(let i=1;i<=num;i++ ){
//   if(num%i==0){
//     count++;
//   }
// }
// if(count==2){
//   console.log('Prime')
// }
// else{
//   console.log('Non-prime')
// }

// approach -3 To optimize, run loop from 0 to Math.sqrt(n)