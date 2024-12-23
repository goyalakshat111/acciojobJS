// 20 dec
// Sorting

// undefined vs not defined

// undefined - When variable is declared but not initialized or when function doesn't return anything

// let x;
// console.log(x)

// function sum(){}
// console.log(sum())

// not defined - It is reference type error, when variable doesn't exist ie. not declared

// console.log(a)      // Reference error: a is not defined

// ***********************************************************************

// Function

// function greet(){
//     console.log("hello");
//     return 1000;
// }

// let x = greet()
// console.log(x)

// let y = greet
// console.log(y)


// Passing Fuction

// function hello(n){
//     console.log(n)
// }

// function greet(){
//     console.log('hello')
//     return 1000;
// }

// hello(greet())
// hello(greet)

// ********************************************************************

// localeCompare() - method to compare two strings: return -1 if a<b and 1 if a>b
// let a = 'anaar'
// let b = 'seb'
// console.log(a.localeCompare(b))

// *********************************************************************

// Sorting - works on arrays

// sort() method           Time Complexity  = O(nlogn)

// string
// let arr = ['apple','orange','banana','kiwi','grapes']

// ascending order

// arr.sort();
// console.log(arr)

// Note: In customSort return +ve mtlb swap , return -ve mtlb no change

// descending order

// arr.sort(customSort);
// function customSort(a,b){
//     if(a<b){
//         return 1;
//     }
//     else{
//         return -1
//     }
// }
// console.log(arr)

// let arr1 = [10,2,1];

// doesn't work directly on numbers 

// arr1.sort();
// console.log(arr1)

// sort numbers in asceding order

// arr1.sort(customSort)
// function customSort(a,b){
//     return a-b;
// }

// or

// arr1.sort((a,b)=>a-b)

// console.log(arr1)

// sort numbers in descending order

// arr1.sort(customSort)
// function customSort(a,b){
//     return b-a;
// }

// or

// arr1.sort((a,b)=>b-a)

// console.log(arr1)


//ques - sort items based on price

// let items =  [
//     {name:'Banana',price:50},
//     {name:'Apple', price:20},
//     {name:'Orange', price:30}
// ]
    
// items.sort(customSort)
// function customSort(a,b){
//     return a.price - b.price
// }
// console.log(items)   

// ques- sort it based on department in descending order and if department is same then sort it based on 
// name in asceding order

// let employees = [
//     {name:'Hannah', department:'Finance'},
//     {name:'Sarah', department:'IT'},
//     {name:'Zryan', department:"Finance"},
//     {name:'Mike', department:"IT"},
//     {name:"Yshley",department:"Finance"},
//     {name:"Jeff", department:"IT"}
// ];

// employees.sort(customSort)

// function customSort(a,b){
//     if(a.department<b.department){
//         return 1;
//     }
//     else if(a.department>b.department){
//         return -1;
//     }
//     else{
//         if(a.name<b.name){
//             return -1
//         }
//         else{
//             return 1
//         }
//     }
// }
// console.log(employees)


// Sorting Algorithms

// Bubble sort  - swap adjacent values           O(n^2)

// let arr = [ 10, 2, 5, 1, 7]

// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//         }
//     }
// }
// console.log(arr)

// Selection Sort - find min element and swap with atmost left positon element

// let arr = [10,2,5,1,7]

// for(let i=0;i<arr.length-1;i++){
//     let minIndex = i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[minIndex]){
//             minIndex = j
//         }
//     }

//     [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
// }

// console.log(arr)