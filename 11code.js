// 28 nov

// JavaScript doesn't have truly static arrays natively because all arrays in JavaScript are 
// essentially dynamic. However, we can make them static by adding constraints like sealing or wrapping

// Array - Array is special type of object that is used to store and manage values
// Dynamic (size can change), Heterogeneous elements(elements of different datatype)


// let arr = ["hello",10,true,30,40,50.6]

// console.log(arr)                                  // ['hello',10,true,30,40,50.6]
// console.log(arr[0])                                // hello
// console.log(arr[10])                               // undefined
// console.log(arr.length)                             // length of array --> 6

// print array using for loop
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// for-of loop--> used to print values  (Drawback is it'll run from start to end only)
// for(let value of arr){
//     console.log(value)
// }

// for-in loop --> used to print indexes but generally not used with array as it is slow with array
// for(let x in arr){
//     console.log(x)
// }



// create an array and print sum of elements

// let a = [1,10,5,7,9]
// let sum=0
// for(let t of a){
//     sum+= t
// }
// console.log(sum)


// take two arrays and print sum of corresponding elements of array

// let a = [1,3,5,7,9]
// let b = [2,4,6,8,10]

// for(let i=0;i<a.length;i++){   
// let sum = 0
// sum = a[i]+b[i]
// console.log(sum)
// }


// In JavaScript, a sparse array is an array in which not all elements are defined or initialized. 
// This means that the array may have gaps or holes where some indices have no values.
// our normal arrays are dense arrays, they are contiguous in nature (mostly these are used)

// let arr = [1,2,,,5]
// arr[8] = 10
// for(let t of arr){
//     console.log(t)
// }


// push() and pop() - add or remove an element to array at end

// let arr = [10,20,30,40,50]

// push - for adding element

// let x = arr.push(60)
// console.log(arr,x)            // x will give size of array after pushing element - 6
// let y = arr.push(70,80)
// console.log(arr,y)            // y will give size of array after pushing elements - 8

// pop - for removing element

// let z = arr.pop()
// console.log(arr,z)            // z will give the element that is being removed from end - 80


// ques - to remove index 3 element using pop
// let arr = [10,20,30,40,50,60]

// let a1 = []
// for(let i=0;i<=3;i++){
//     a1.push(arr[i])
// }

// a1.pop()

// let a2 =[]
// for(let i=4;i<arr.length;i++){
//     a2.push(arr[i])
// }

// for(let t of a2){
//     a1.push(t)
// }

// console.log(a1)

// using spread operator to merge arrays

// let a1 = [1,2,3,4,5]
// let a2 = [6,7,8]
// let a = [...a1,...a2,9,10]
// console.log(a)


// shift and unshift - to remove and add element of array from start

// let arr = [10,20,30,40,50]

// let x = arr.shift()                               // remove
// console.log(arr,x)

// let y = arr.unshift(1,2,5)                        // add
// console.log(arr,y) 


// splice - used to add or remove elements

// let brr = [10,20,30,40,50,60]

// splice(starting index, no. of elements to remove) --> to remove elements
// brr.splice(3,2);              
// console.log(brr)

// splice(starting index, no. of elements to remove, elements to add) --> to add elements
// brr.splice(3,0,100,200)
// console.log(brr)


// ques - remove 30 
// let arr = [10,20,30,40,50,60]
// for(let i=2;i<arr.length-1;i++){
//     arr[i] = arr[i+1]
// }
// arr.pop()
// console.log(arr)

// ques - add 25 at index 2
// let arr= [10,20,30,40,50,60]
// arr.splice(2,0,25)
// console.log(arr)

// subArray :(Contiguous part of an array)  - use slice() 
// eg.  let arr = [1,2,3,4] then subarray would be [1],[2],[3],[1,2],[2,3],[3,4],[1,2,3],
// [2,3,4],[1,2,3,4]

//  a  k  s  h  a  t
//  0  1  2  3  4  5
// -6 -5 -4 -3 -2 -1

// let arr= ['a','k','s','h','a','t']

// console.log(arr.slice(0,6))
// or
// console.log(arr.slice(0))

// console.log(arr.slice(2,4))
// or
// console.log(arr.slice(-4,-2))

// console.log(arr.slice(1,-1))

// ques 
// take a array, print all 3 letters subarray

// let arr = ['a','c','c','i','o']
// for(let i=0;i<arr.length-2;i++){
//     console.log(arr.slice(i,i+3))
// }

// ques - take a array and print all subarray
// let arr = [10,20,30,40]
// all possible subarrays are :
// 10                     (0,0)
// 10 20                  (0,0) (0,1)
// 10 20 30               (0,0) (0,1) (0,1,2)
// 10 20 30 40            0 1 2 3
// 20                     1
// 20 30                  1 2
// 20 30 40               1 2 3
// 30                     2 
// 30 40                  2 3
// 40                     3
// total subarrays are : n(n+1)/2  where n = size of array

// let subArrays = []
// for(let start =0;start<arr.length;start++){
//     for(let end = start;end < arr.length;end++){
//         let subArray = arr.slice(start,end+1)
//         subArrays.push(subArray)
//     }
// }
// console.log(subArrays)

//indexOf(element, starting index[if not mention then default is 0])
// lastIndexOf(element, piche se starting index )

// let arr = ['a','c','c','i','o','j','o','b']
// console.log(arr.indexOf('c'))  // will give first index of c from left
// console.log(arr.indexOf('o',5)) // will give index of o from 5 index
// console.log(arr.indexOf('z'))   // if element not present then it'll give -1

// console.log(arr.lastIndexOf('c'))    // last index of c - 2
// console.log(arr.lastIndexOf('o',5))    // last index of o - 6

// spread operator vs concat() method  - used to merge arrays
// The concat() method is specifically designed for arrays. Slightly faster than spread 
// Spread -Works not only for arrays but also for other iterables like strings, sets, objects etc.
// Both spread, concat methods maintain the data type of the elements as they are merged into new array.

// concat() - Uses a method to join arrays.

// let array1 = [1, 2, 3, 4];
// let array2 = [5, 6, 7, 8];
// // Use the concat method to merge array1 and array2 into a third array
// let array3 = array1.concat(array2);
// let array4 = array1.concat(100,array2)
// // Print all three arrays
// console.log("Array 1:", array1);
// console.log("Array 2:", array2);
// console.log("Concatenated Array 3:", array3);
// console.log(array4)

// spread - Uses a shorthand syntax within array literals
 
// let array1 = [1, 2, 3, 4];
// let array2 = [5, 6, 7, 8];
// // Use the spread operator to merge array1 and array2 into a third array
// let array3 = [...array1, ...array2];
// let array4 = [0,...array1,5]
// // Print all three arrays
// console.log("Array 1:", array1);
// console.log("Array 2:", array2);
// console.log("Concatenated Array 3 using Spread Operator:", array3);
// console.log(array4)











