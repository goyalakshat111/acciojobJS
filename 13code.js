// 2 dec

// Searching

// ques - check if element is present or not

// let arr = [10,20,30,90,50]
// let target=40
// let flag = false
// for(let t of arr){
//     if(t==target){
//         console.log(target,"is present")
//         flag = true
//         break;
//     }
// }
// if(flag==false){
//     console.log(target,'is not present')
// }


// ques 
// find all index of 20, print in another array
// print -1 if not found

// let arr = [10,20,30,40,50,20,60,10,20,10,20]
// let newArray = []
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==20){
//         newArray.push(i)
      
//     }
// }
// newArray.length==0 ? console.log(-1):console.log(newArray)

// Set - stores only unique values

// Creation of set
// let s = new Set();

// to insert values, use add() method

// s.add(1)
// s.add(2)
// s.add(3)
// s.add(3)

// print set
// console.log(s)


// size
// console.log(s.size)

// to check if element is present or not
// console.log(s.has(50))                       // return true if value exist

// traversing in set
// for(let t of s){
//     console.log(t)
// }

// to delete single element
// console.log(s.delete(2))                    // return true if set is not empty after deleting element           

// to delete all element
// s.clear()
// console.log(s)


// ques - remove duplicate values of array

// let arr = [10,20,30,40,50,20,60,10,20,10,20]
// let set = new Set(arr)          //  or let set = new Set([1,2,3,1,3,2])
// console.log(set)                // set
// console.log(...set)            // will return array by spread operator


// ques - find all 3 length subarray which has only unique values

// let arr = [10,20,10,30,40,30,50,60,70,50]


// for(let i=0;i<arr.length-2;i++){
//     let subarray =arr.slice(i,i+3)

//     let set = new Set(subarray)
//     let subArraysize = subarray.length
//     let setSize = set.size
//     if(subArraysize==setSize){
//         console.log(subarray)
//     }
// }


// ques - find all subarray which has unique values

// let arr = [10,20,10,30,40,30,50,60,70,50]

// let count=0
// for(let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         let subarray = arr.slice(i,j+1)
//         let s = new Set(subarray)
//         let setSize = s.size
//         let subarraySize = subarray.length
//         if(setSize==subarraySize){
//             console.log(subarray)
//             count++
//         }
//     }
// }
// console.log(count)

// or

// let count =0
// for(let i=0;i<arr.length;i++){
//     let temp =[]
//     for(let j=i;j<arr.length;j++){
//         temp.push(arr[j])
//         let set = new Set(temp)
//         if(temp.length==set.size){
//             console.log(temp)
//             count++
//         }
//     }
// }
// console.log(count)






