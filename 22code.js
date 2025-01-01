// 17 dec
// Recursion intermediate

//      https://onecompiler.com/challenges-next/3xm7ksyt5/coding-questions

//ques- Remove all elements from array using recursion

// let nums= [ 1,3,2,6,4]
// function removeElements(arr){
//     if(arr.length==0){
//         console.log(arr)
//         return;
//     }
//     arr.pop();
//     removeElements(arr)
// }
// removeElements(nums);

// ques- take two array and find sum of corresponding elements of two array in a new array

// let a = [1,2,3,4,5]
// let b = [6,7,8,9,10]

// function corSum(a,b,c=[],i=0){
//     if(i==a.length ){
//         console.log(c)
//         return;
//     }

//     c.push(a[i]+b[i])
//     return corSum(a,b,c,i+1)
// }
// corSum(a,b)


// ques- take two sorted array and merge it so final array is sorted

// let arr1 = [1,3,5,7,9]
// let arr2 = [2,4,6]

// function letsMerge(arr,brr,crr=[], i = 0, j = 0){
//     if(i == arr.length){
//         for(j ; j<=brr.length-1; j++){
//             crr.push(brr[j])
//         }
//         return crr
//     }

//     if(j == brr.length){
//        while(i<=arr.length-1){
//         crr.push(arr[i])
//         i++
//        }
//          return crr
//     }

//     if(arr[i]<brr[j]){
//         crr.push(arr[i])
//         i++
//     }
//     else if(arr[i]>brr[j]){
//         crr.push(brr[j])
//         j++
//     }
//     else if(arr[i] == brr[j]){
//         crr.push(arr[i])
//         crr.push(brr[j])
//         i++
//         j++
//     }

//     return letsMerge(arr,brr,crr,i,j)

// }

// console.log(letsMerge(arr1,arr2))


// reverse an array using recursion

// let arr = [ 1,2,3,4,5]

// function reverse(arr,i=0,nums=[]){
//     if(i>=arr.length){
//         return nums;
//     }
   
//     nums = reverse(arr,i+1,nums)
//     nums.push(arr[i])
//     return nums
    
// }
// console.log(reverse(arr))


// find the maximum element using recursion

let arr = [ 1,5,2,7,4];

function maximumElement(arr,i=0,maxi=Number.MIN_VALUE){
    if(i==arr.length){
        console.log(maxi)
        return;
    }
    if(arr[i]>maxi){
        maxi = arr[i]
    }
    return maximumElement(arr,i+1,maxi)
}
maximumElement(arr)