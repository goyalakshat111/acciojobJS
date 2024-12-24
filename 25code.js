// 23 dec 
// Sorting 

//  Insertion Sort - like sorting playing cards in your hand    TC = O(n^2)

// let arr = [4,2,1,5,3]
// for(let i=1;i<arr.length;i++){
//     let key = arr[i]
//     let j=i-1
//     for(;j>=0;j--){
//         if(arr[j]>key){
//             arr[j+1] = arr[j]
//         }
//         else{
//             break
//         }
//     }
//     arr[j+1] = key
// }
// console.log(arr)

// or

// let arr = [4,2,1,5,3]
// for(let i=1;i<arr.length;i++){
//     let key = arr[i]
//     let  j = i-1
//     while(j>=0 && arr[j]>key){
//         arr[j+1] = arr[j]
//         j--
//     }
//     arr[j+1]= key
// }
// console.log(arr)


// Searching

// Linear Search - O(n) 

//ques- find the element in the array and print the index of that element
// let arr = [ 1,4,5,7,8,9,10]
// let target = 8

// soln-
// let flag = false;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===target){
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

// soln-
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

// soln-
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


// Binary Search - applies on sorted array (ie. monotonous either increasing or decreasing)
// TC = O(logN)

// ques- search element in array
// let arr = [10,20,30,40,50,60,70]
// let target = 60

//soln
// function binarySearch(arr,target){
//     let start = 0;
//     let end = arr.length-1;

//     while(start<=end){

//     let mid = parseInt(start+(end-start)/2);

//     if(target==arr[mid]){
//         return mid;
//     }
//     else if(target<arr[mid]){
//         end = mid-1
//     }
//     else if(target>arr[mid]){
//         start = mid+1
//     }
// }
// return -1
// }
// console.log(binarySearch(arr,target))


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

// let x = firstOccurence(arr,target)
// console.log(x)

// let y = lastOccurence(arr,target)
// console.log(y)

