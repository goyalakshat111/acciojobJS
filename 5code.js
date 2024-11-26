// 18 nov


// increment and decrement operator

// let a=5

// z= a++ + --a

// console.log(z)
// console.log(a)


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



// prime number

let a = 101
let ans = true
  
  for(let i=2;i<a;i++){
    if(a%i==0){
       ans = false
       break;
    }
  }
  
   if(a==2){
    ans = true
  }
 console.log(ans)
