// 29 nov

// let arr = [10,20,30]

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// console.log(a,b,c)

// destructuring
// let [a,b,c] = arr
// console.log(a,b,c)

// let [a,,c] = arr
// console.log(a,c)

// spread vs rest
//spread(spreads out elements of an array) 
// rest(collects multiple elements into a single container like array or object)

// let brr = [1,2,3,4,5,6,7,8]
// let [a,b,c,...d] = brr
// console.log(a,b,c,d)


// swapping

// let a=10;
// let b=20;
// [a,b] = [b,a]
// console.log(a,b)

// ques - take an array and reverse it

// let arr =[10,20,30,40,50]
// let revArray =[]
// for(let i=arr.length-1;i>=0;i--){
//     revArray.push(arr[i])
// }
// console.log(revArray)

// using reverse() method
// console.log(arr.reverse())

// using two pointer
// let i=0
// let j = arr.length-1
// while(i<j){
//     [arr[i],arr[j]] = [arr[j],arr[i]]
//      i++
//      j--
// }
// console.log(arr)

// reverse using for-of loop
// let arr = [1,3,5]
// for(let t of [...arr].reverse()){
//     console.log(t)
// }


// ques - Sort 0 and 1 using two pointer
// let arr = [0,1,1,0,0,0,1,1,0,1]
// let i=0
// let j = arr.length-1

// while(i<=j){
//     if(arr[i]==0){
//         i++ 
//     }
//     else if(arr[j]==1){
//         j--
//     }
//     else{
//         [arr[i],arr[j]] = [arr[j],arr[i]]
//         i++
//         j--
//     }
// }
// console.log(arr)

// delete all elements of array
// let arr = [1,2,3,4,5]

// approach 1 using delete keyword  --> creates a sparse array
// for(let i=0;i<arr.length;i++){
//     delete arr[i]
// }
// console.log(arr)

// approach 2
// arr = []                                        //or     arr.length =0
// console.log(arr)

// approach 3  applying for loop and using pop
// let l = arr.length-1
// for(let i=0;i<=l;i++){
//     arr.pop()
// }
// console.log(arr)

// ques 
// Explaination -  In JavaScript, an empty array ([]) is a truthy value. It is an object

// let arr =[]
// if(arr){
//     console.log("hello")
// }
// else{
//     console.log("world")
// }

// Falsy values are values that coerce to false in a Boolean context. These include:
// false
// 0
// "" (empty string)
// null
// undefined
// NaN

// ques - max element

// approach 1
// let arr = [1,2,3,4,5]
// let max = arr[0]                          // or let max = -Infinity or let max = Number.MIN_VALUE
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max)

// approach 2
// console.log(Math.max(...arr))


// ques - remove duplicate value

// let arr = [1,2,1,1,2,1,2,3,3,1,4]

// approach 1
// let newArray =[]
// for(let i=0;i<arr.length;i++){
//     if(!newArray.includes(arr[i])){
//         newArray.push(arr[i])
//     }
// }

// approach 2
// for(let t of arr){
//     if(newArray.indexOf(t)==-1){
//         newArray.push(t)
//     }
// }
// console.log(newArray)


// index Of:

// let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

// for(let t of alphabet){
//     if(t == "a" || t == "A" ||
//         t == "e" || t == "E" ||
//         t == "i" || t == "I" ||
//         t == "o" || t == "O" ||
//         t == "u" || t == "U" 
//     ){
//         console.log(t)
//     }
// }

// let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]


// for(let t of alphabet){
//     //   if(vowels.indexOf(t)>=0){
//     if(vowels.includes(t)){
//             console.log(t)
//       }
// }


// ques - find commutative sum

// let arr = [1,2,3,4,5,6]

// approach 1
// for(let i=0;i<arr.length;i++){
//     let sum =0
//     for(let j=0;j<arr.length;j++){
//         if(i!=j){
//             sum = sum+arr[j]
//         }
//     }
//     console.log(sum)
// }

// approach 2
// let sum =0
// for(let t of arr){
//     sum = sum+t
// }
// for(let t of arr){
//     console.log(sum-t)
// }


// ques - subarray
// check how many subarrays of length 3 are palindrome

// let brr = ['a','b','a','b','c','a','c']
// let count =0
// for(let i=0;i<brr.length-2;i++){
//     let subArray =brr.slice(i,i+3)
//     if(subArray[0]==subArray[2]){
//         count++
//     }
// }
// console.log(count)


// ques -->  merge array1(sorted) and array2(sorted) such that merge array is sorted
let a1 = [1,3,5,7,9]
let a2 = [2,4]
let a3 = [] 

let i=0
let j=0
let k=0
let len1 = a1.length
let len2 = a2.length
while(i<len1 && j<len2){
    if(a1[i]<a2[j]){
        a3[k] = a1[i]
        i++
        k++
    }
    else{
        a3[k] = a2[j]
        j++
        k++
    }
}

// second array exhaust ho gya but element remain in first array
while(i<len1){
    a3[k] = a1[i]
    i++
    k++
}
// first array exhaust ho gya but element remain in second array
while(j<len2){
    a3[k] = a2[j]
    j++
    k++
}

console.log(a3)


