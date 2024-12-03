// 3 dec

// Objects - key-value pairs where keys are of string type and values are of any datatype

// let obj = {
//     'apple':10,
//     'mango':20,
//     'x':30,
//     'y':40,
//     'mango':40,                                    // updated value of mango to 40
// }

// console.log(obj,typeof obj)

// access values 
// console.log(obj.x)                            //30
// console.log(obj.z)                           // undefined because there is no key z present

// add values
// obj.t = '60'
// console.log(obj)

// update values
// obj.apple = 100
// console.log(obj)

// delete key-value pair

// delete obj['x']                                     // or         delete obj.x
// console.log(obj)

// *************************************************************************

// let obj = {
//     'a':10,
//     'b':20,
//     'c':30,
//     'hello world':40
// }
// console.log(obj)
// console.log(obj.a)

// dot notation is not allowed for anthing that cannot be a valid variable name
// console.log(obj.'hello world')                    // error because key should have no space

// let t = 'a'
// console.log(obj.t)                       //undefined because object thinks t as key not variable

// *************************************************************************************

// Universal syntax --> ['key']   / [variable_name]

// let obj = {
//     'a':10,
//     'b':20,
//     'c':30,
//     'hello world':40,
//     't':1
// }

// console.log(obj['hello world'])                        // 40

// let t = 'a'
// console.log(obj.t)                                     // 1
// console.log(obj[t])                                   // 10
// console.log(obj['t'])                                 // 1

// ************************************************************************

// for-in loop --> generally give index in array , here in object give keys

// let obj = {
//     'a':10,
//     'b':20,
//     'c':30
// }

// for(let t in obj){
//     console.log(t,obj[t])
// }

// ******************************************************************************

// In object, all keys are string generally

// let obj = {
//     0:'apple',
//     true:20,
//     'a':10,
//     'b':30
// }

// for(let t in obj){
//     console.log(t,typeof t)
// }

// but, if any key is not string, it is number or boolean, it can act both as string and number or 
// string and boolean

// console.log(obj[0])
// console.log(obj["0"])

// console.log(obj[true])
// console.log(obj['true'])


// Array is also an object whose indexes(that are keys) are string
// let arr = [1,2,3,4,5]

// for(let i in arr){
//     console.log(typeof i)
// }
// console.log(arr[0])               // correct
// console.log(arr['0'])            // correct

// **********************************************************************

// order in object in javascript

// let obj = {
//     b:20,
//     2:'apple',
//     a:10,
//     1:'mango',
//     c:30,
//     0:'banana'
// }
// except numbers, every thing will remain in same order in which they are defined or created
// only numbers in keys will move to the top and sort in ascending order
// console.log(obj)             //{ '0': 'banana', '1': 'mango', '2': 'apple', b: 20, a: 10, c: 30 }

//****************************************************************** 
// []  treat key as variable

// let a = 'apple'
// let obj = {
//     [a]:10,
//     b:20,
//     [4+2]:30
// }
// console.log(obj)

// ******************************************************************

// ques

// let obj1 = {
//     'full-name':'Rahul',
//     'age':20,
//     'city':'Delhi'
// }
// change the key of 'full-name' to 'first-name'

// soln--->

// copy an object using for-in loop

// let obj2 = {}
// for(let t in obj1){
//     if(t=='full-name'){
//         obj2['first-name'] = obj1[t] 
//     }
//     else{
//         obj2[t] = obj1[t]
//     }  
// }
// console.log(obj2)

// approach-2 using delete

// let v = obj1['full-name']
// delete obj1['full-name']
// obj1['first-name'] = v
// console.log(obj1)

// ques - merge two object into another object

// let a = {
//     name:'akshat',
//     'age':20,
//     'city':'Delhi'
// }

// let b = {
//     degree:'BE',
//     stream:'CSE'
// }

// approach -1 using for-in loop
// let c = {}
// for(let t in a){
//     c[t] = a[t]
// }
// for(let t in b){
//     c[t] = b[t]
// }
// console.log(c)

// approach -2 using spread operator

// let c = {...a,...b}
// console.log(c)

// ques - change key mumbai to delhi
// let obj1 = {
//     'full-name':'Rahul',
//     'age':20,
//     'city':'Mumbai'
// }

// soln----

// let obj2 = {...obj1,city:'delhi'}
// console.log(obj2)

// ques - check if key ('age') is present in an object or not
// let obj = {
//     'name':'abhi',
//     'age':23,
// }

// soln---

// let flag = false
// for(let t in obj){
//     if(t=='age'){
//         console.log('key is present')
//         flag = true
//         break
//     }
// }
// if(flag==false){
//     console.log('key is not present')
// }


// objects

// let obj = {
//     a:10,
//     b:20,
//     c:'hello',
//     d:[10,20,30],
//     e:{
//         x:10,
//         y:20
//     }
// }
// console.log(obj)

// for accessing array values
// console.log(obj.d[0])

// for accessing inner object values
// let t = obj.e
// console.log(t.x)
// // or
// console.log(obj.e.y)
// // or
// console.log(obj['e']['y'])


// destructuring

//Destructuring in array
// let arr = [1,2,3]

// generally
// let x = arr[0]
// let y = arr[1]
// let z = arr[2]

// destructuring
// let [x,y,z] = arr

// console.log(x,y,z)

// Destructuring in objects

// let obj = {
//     a:10,
//     b:20,
//     c:30
// }

// normally

// let x = obj.a
// let y = obj.b
// let z = obj.c

// destructuring
// let {a:x,b:y,c:z} = obj
// console.log(x,y,z)

// let {a:x,b:y} = obj
// console.log(x,y)


// creation of object using shorthand - when key and value has same name

// let a = 10
// let b = 20
// let obj = {
//     a,                                             // internally,  a:a
//     b,                                             // internally,  b:b
//     z:100
// }
// console.log(obj)


// destructuring using shorthand

let obj = {
    a:10,
    b:20,
    c:30
}

// //normally
// //  leta = obj.a
// //  let b = obj.b
// //  let c = obj.c

// // destructuring
let {a,b,c} = obj
console.log(a,b,c)