// 23 dec 
// Searching

// Linear Search - O(n) 

// let arr = [1,5,10,3,8,2]
// let target = 80

// let flag = false;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//         console.log("Element found at index ",i)
//         flag = true;
//         break
//     }
// }
// if(!flag){
//     console.log("Element not found")
// }

// ques- find difference of just greater and just smaller element than n

// let sortedArr = [10,20,30,40,50,60,70]
// n = 45

// for(let i=0;i<sortedArr.length;i++){
//     if(sortedArr[i]>n){
//        let diff = sortedArr[i]-sortedArr[i-1]
//        console.log(diff)
//         break
//     }
// }

// ques- find starting and last index of 30 in the array

// let sortedArr = [ 10,20,30,30,30,40,50]
// let target = 30

// let start = -1
// let end = -1
// for(let i=0;i<sortedArr.length;i++){
//     if(sortedArr[i]==target){
//        if(start ==-1){
//         start = i;
//        }
//        end = i
//     }
// }
// console.log(start,end)

// **********************************************************************

// Binary Search - applies on sorted array (ie. monotonous, either increasing or decreasing)
// TC = O(logN)

// let arr = [10,20,30,40,50,60,70]
// let target = 60

// let start = 0;
// let end = arr.length-1;
// while(start<=end){

//     let mid = parseInt(start+(end-start)/2);

//     if(arr[mid]==target){
//         console.log('Found at index',mid)
//         return;
//     }
//     else if(target<arr[mid]){
//         end = mid-1
//     }
//     else if(target>arr[mid]){
//         start = mid+1
//     }
// }
// if(start>end){
//     console.log('Not found')
// }

// ques- find start and last index of target element

// let arr =  [10,20,30,30,30,40]
// let target = 30

// function firstOccurence(arr,target){
//     let start = 0;
//      let end = arr.length-1;
//      let pos = -1;

//     while(start<=end){
//     let mid = parseInt(start+(end-start)/2);
    
//     if(target==arr[mid]){
//        pos = mid
//        end = mid-1
//     }
//     else if(target<arr[mid]){
//         end = mid-1
//     }
//     else if(target>arr[mid]){
//         start = mid+1
//     }
// }
// return pos
// }

// let x = firstOccurence(arr,target)
// console.log(x)

// function lastOccurence(arr,target){
//     let start = 0;
//     let end = arr.length-1
//     let pos =-1

//     while(start<=end){
//     let mid = parseInt(start+(end-start)/2);
    
//     if(target==arr[mid]){
//        pos = mid
//        start = mid+1
//     }
//     else if(target<arr[mid]){
//         end = mid-1
//     }
//     else if(target>arr[mid]){
//         start = mid+1
//     }
// }
//     return pos
// }

// let y = lastOccurence(arr,target)
// console.log(y)

// ques- find difference of just greater and just smaller element than n

// let sortedArr = [10,20,30,40,50,60,70]
// n = 45

// function solution(arr,target){
//     let start = 0
//     let end = sortedArr.length-1
    
//     while(start<=end){
//         let mid = Math.floor((start+end)/2);
//         if(arr[mid]==target){
//             return 0;
//         }
//         else if(target<arr[mid]){
//                 end = mid-1
//             }
//         else if(target>arr[mid]){
//                 start = mid+1
//             }
//         }
//         return [arr[end],arr[start]]
//     }
// console.log(solution(sortedArr,n))


// ques - find element if size of array is Infinity

