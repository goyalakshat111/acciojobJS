// 5 dec

// Mutable vs Immutable
// All primitive datatypes are immutable - number, string, boolean, symbol, null, undefined, bigint
// For strings, changes create a new memory reference.
// example-
// let str = 'hello';
// let modifiedStr = str.replace('h','a');
// console.log(str);                                   // hello (unchanged)
// console.log(modifiedStr);                           // aello  (new String)


// All non-primitive datatypes are mutable - Object, Array, Fuction
//  (array, function technically are also object)
// For mutable types (e.g., arrays), changes are made to the original memory reference.
// example-
// let arr1 = [1,2,3]
// let brr1 = arr1;
// brr1[0] = 10
// console.log(arr1,brr1)                // [10,2,3] both are updated

// ********************************************************************

// Nested Array

// let arr= [10,[20,30],[[40,50],[60]]]

// console.log(arr.length)          // 3

// // print
// console.log(arr[0])              //10
// console.log(arr[1])              //[20,30]
// console.log(arr[2][0][1])        // 50
// console.log(arr[1][0])           //20


// flat() method in array

// ques - remove all nested arrays and keep all elements in one array
// let arr1 = [10,[20,30],35,[40,50],69]

//approach-1
// for(let t of arr1){
    
//     if(typeof(t)=="number"){
//         console.log(t)
//     }
//     else if(typeof(t)=="object"){
//         let brr = t
//         for(let x of brr){
//             console.log(x)
//         }
//     }
// }

// approach 2
// let brr = arr1.flat()
// console.log(brr)

// ***************************************************************************

// Cloning - Cloning refers to creating a copy of an object or array (Shallow cloning, Deep cloning)

// In JS, primitive datatypes are stored by value.
// When you copy a primitive value, it always creates a completely new independent copy. 
// Hence, there’s no concept of shallow or deep copying for primitive types.

// let a =10
// let b = a           // photocopy
// a=100
// console.log(a,b);


// In JS, non- primitive datatypes are stored by reference.

// Reference assignment - Both variables point to the same array in memory.
// let arr = [10,20,30,40,50];
// let brr = arr
//    arr[0]= 100
// console.log(arr)              // changed
// console.log(brr)               // changed


// shallow copy - Creates a new array in memory with the same values as the original array.
// let arr = [10,20,30,40,50];
// approach 1
// let brr = []
// for(let i=0;i<arr.length;i++){
//     brr[i] = arr[i]
// }
// arr[1] =200
// console.log(arr)                    // unchanged
// console.log(brr)                    // modified

// approach2
// let brr = [...arr]
// brr[0]=43;
// console.log(arr)                   // unchanged
// console.log(brr)                   // modified


// shallow copy  
// Shallow Copy - A shallow copy creates a new object or array, but only copies the first level of
// properties or elements. For nested objects or arrays, the references to the inner objects/arrays
// are copied, not their actual values. As a result, changes to nested objects or arrays affect 
// both the original and the copied object.

// let arr = [1,2,3,[4,5,6],7]
// let brr = []
// for(let i=0;i<arr.length;i++){
//     brr[i]=arr[i]
// }
// arr[0] =10
// arr[3][0] = 40
// console.log(arr)
// console.log(brr)                            // nested array changed (4 to 40)

//Deep copy - A deep copy creates a completely independent copy of the object or array, including all
// nested objects or arrays. Changes to the nested objects in the copied structure do not affect the 
// original object.

// let arr = [10,20,30,40,50,[60,70,80],90,100]                       
// let brr = [] 

// for(let i =0 ; i<arr.length; i++){
//     if(Array.isArray(arr[i]) == true){  
//       let crr = [...arr[i]]
//         brr.push(crr)
//     }
//     else{
//         brr.push(arr[i])
//     }
// }
// arr[0] = 100
// brr[1] = 200
// arr[5][0] = 600
// console.log(arr)                         //changed (60 to 600)
// console.log(brr)                        // nested array unchanged (60 t0 60)


// Structured Clone (A short method for deep copy) (version 17.2 update)
// let arr= [10,20,30,[40,[50,60]],70,80,[90,100,110],120,130]

// let brr = structuredClone(arr) // deep copy
// arr[3][1][0] = 500
// console.log(arr)                       // changed (50 to 500)
// console.log(brr)                       // nested array unchanged ( 50 to 50)

//********************************************************* 

// const variable

// const with Primitive Datatypes - can't be reassigned

// const a;                   //Syntax error - must be declared and initialized in same line

// const b = 10;

// const c = 10               // correct
// c = 10                     // Type Error - we can not reassign const variable


// const with non- primitve datatypes - When using const with objects or arrays, the reference to the
//  object or array cannot be changed, but the contents can still be modified. This is because objects 
//  and arrays are stored by reference, and const only ensures that the reference itself is constant.

// const arr = [1,2,3,4]
// arr[0] = 5
// console.log(arr)                  [5,2,3,4]

// *************************************************************************

// Interview question - delete all elements of array of size 1 crore

// let arr = [1,2,3,4,5]
// arr = []                                      // work for let only
// const brr = [1,2,3,4,5]
// brr.length=0                                  // work for both let and const
// console.log(arr)
// console.log(brr)

//************************************************************************* 

// function 

// call by value

// function hello(a,b){
//     a = 100
//     b=200
//     console.log("inside",a,b)
// }

// let a=10
// let b = 20
// hello(a,b)
// console.log("outside",a,b)

// call by reference

// function hello(brr){
//     brr[0] =100
//     console.log("inside",brr)
// }
// let arr = [10,20,30]
// hello(arr)
// console.log("outside",arr)

// ******************************************************************************

// object

// let obj = {
//     name:"jon",
//     age:19,
//     fruits:["apple","mango","banana"]
// }

// obj.fruits.pop();
// console.log(obj)

// or

// let arr = obj.fruits
// arr.pop()
// console.log(obj)

// *************************************************************************

// ques - who are eligible for voting
// let arr = [
//     {name:"A",age:10},
//     {name:"B",age:20},
//     {name:"C",age:30},
//     {name:"D",age:72},
// ]

// for(let t of arr){
//     if(t.age>=18){
//         console.log(t.name)
//     }
// }


// ques - 
let cart = {
    owner:"Akshat",
    items:[
        {name:"laptop",price:5000,quantity:5},
        {name:"mouse",price:2000,quantity:0},
        {name:"keyboard",price:6000,quantity:2},
        {name:"usb",price:1000,quantity:0},
        {name:"monitor",price:500,quantity:10},
    ]
}

// 1.delete all items whose quantity is 0           

// let arr = cart.items
// for(let i=0;i<arr.length;i++){
//     if(arr[i].quantity==0){
//         arr.splice(i,1)
//         i--
//     }
// }
// console.log(cart)

// 2.find total stock price

let sum =0;
let arr = cart.items;
for(let i=0;i<arr.length;i++){
    sum += (arr[i].price *arr[i].quantity)
}
console.log(sum);

