// 22 nov

// nested loop
// outer loop  = number of rows
// inner loop = number of columns

//q1
// *****
// *****
// *****
// *****

// for(let i=1;i<=4;i++){
//     let str =""
//     for(let j=1;j<=5;j++){
//       str = str +'*'
//     }
//     console.log(str)
//   }


//q2
// *
// **
// ***
// ****
// ***** 

// for(let i=1;i<=5;i++){
//     let str =""
//     for(let j=1;j<=i;j++){
//       str = str +'*'
//     }
//     console.log(str)
//   }


//q3
// *
// ***
// *****
// *******

// for(let i=1;i<=5;i++){
//     let str =""
//     for(let j=1;j<=2*i-1;j++){
//       str = str +'*'
//     }
//     console.log(str)
//   }

// or

// let x=1
// for(let i=1;i<=5;i++){
//     let str =""
//     for(let j=1;j<=x;j++){
//       str = str +'*'
//     }
//     console.log(str)
//     x = x+2
//   }


//q4
// 1
// 12
// 123
// 1234
// 12345

// for(let i=1;i<=5;i++){
//     let str =""
//     for(let j=1;j<=i;j++){
//       str = str +j
//     }
//     console.log(str)
//   }


//q5
// 1  
// 22
// 333
// 4444
// 55555

// for(let i=1;i<=5;i++){
//     let str =""
//     for(let j=1;j<=i;j++){
//       str = str + i
//     }
//     console.log(str)
//   }


//q6
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let x =1
// for(let i=1;i<=5;i++){
//   let str =""
//   for(let j=1;j<=i;j++){
//     str = str + x + " "
//     x = x+1
//   }
//   console.log(str)
// }


// q7
// 1
// 01
// 010
// 1010
// 10101
// 010101

// for(let lines =1;lines<=6;lines++){
//     let str = ""
//     let sv
//     if(lines%2==0){
//       sv =0
//     }
//     else{
//       sv =1
//     }
//     for(let col=1;col<=lines;col++){
//       str = str+sv
//       if(sv==0){
//         sv =1
//       }
//       else{
//         sv =0
//       }
//     }
//     console.log(str)
//   }


//q8
// 1
// 01
// 010
// 1010
// 10101
// 010101

// let x = true
// for(let i=1;i<=6;i++){
//   let str =""
//   for(let j=1;j<=i;j++){
//     str = str + Number(x) 
//     if(x ==false){
//       x = true
//     }
//     else{
//       x = false
//     }
//   }
//   console.log(str)
// }


//q9
//     1
//    12
//   123
//  1234
// 12345

// for(let i=1;i<=5;i++){
//     let s2 = ""
//     for(let ns=4;ns>=i;ns--){
//       s2 = s2 + " "
//     }
    
    
//     let str = ""
//     for(let col =1;col<=i;col++){
//       str = str+col
//     }
//     console.log(s2+str)
//   }

// ***************************************************************************

// function --> reusable block of code designed to perform a specific task

// using console.log inside function

// function sum1(x,y){
//    let sum = x+y
//   console.log(sum)
// }
// sum1(3,4)


// using return inside function

// function sum2(x,y){
//    let sum = x+y
//    return sum;
// }
// let ans2= sum2(5,10)
// console.log(ans2)


// return se function ke bahar aa jate

function hello(){
  console.log('A')
  return 100;
  console.log('B')
}
hello();                // return ke baad function se bahar aa jate aage ka kuch nhi chalega





