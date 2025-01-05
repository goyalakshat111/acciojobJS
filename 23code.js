// 19 dec
// Insight:   Time Complexity >>>>>> Space Complexity (Give priority to reducing TC instead of SC)


// map - map is an object in js.
// stored in key-value pair
// key can be of any datatype 
// There is ordered map in js which maintains insertion order
// There is no unordered map in js but can be done using a plain object

// Where to use map: if in any array question, we are searching element then we can try to replace that
// searching by map as it is O(1) in map

let map = new Map();

// .set() method to add key-value pair

map.set('apple',5);
map.set('plum',8);
map.set('banana',4);
map.set('grape',10);
map.set('apple',10);

// print map
// console.log(map)

// .get('key') to print value of key
// console.log(map.get('apple'))

// check if key is present or not
// console.log(map.has('apple'))

// delete key
// map.delete('apple')
// console.log(map)

// delete all keys
// map.clear()
// console.log(map)

// size of map
// console.log(map.size)

// map traversal
// for(let t of map){
//     console.log(t,t[0],t[1])
// }


// ******************************************************************

// Time Complexity for searching, deletion, insertion in array is O(n)
// Time Complexity for searching, deletion, insertion in map is O(1)

// *******************************************************************


//ques- count of unique values from array

let arr = [ 1,2,1,3,4,1,5,2,4,10];

// using array
// TC = O(n^2)
// SC = O(n)

// let brr = [];
// for(let t of arr){
//     if(!brr.includes(t)){
//         brr.push(t)
//     }
// }
// console.log(brr.length)

// using set
// TC = O(n)
// SC = O(n)

// let set = new Set(arr);
// let brr=[...set]
// console.log(brr.length)

// using map
// TC = O(n)
// SC = O(n)

// let map = new Map();
// for(let t of arr){
//     if(map.has(t)){
//         let v = map.get(t)
//         map.set(t,v+1)
//     }
//     else{
//         map.set(t,1)
//     }
// }
// console.log(map);


//ques- given array of integers, return indices of two numbers such that they add upto a specific target
// let nums = [1,2,4,15,4,10,6,13,9];
// let sum = 8;

// Approach1 - by nested loop TC = O(n^2), SC = O(1)

// for(let i=0;i<nums.length-1;i++){
//     for(let j=i+1;j<nums.length;j++){
//        if(nums[i]+nums[j]==sum){
//         console.log(nums[i],nums[j]);
        
//        }
//     }
// }

// Approach2 - by using map  TC = O(n), SC = O(n)



