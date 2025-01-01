// 31 dec 2024
// Matrix - nested array where size of each array is same (rectangle shape)

// let arr = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]

// for(let row=0;row<arr.length;row++){
//     for(let col=0;col<arr[row].length;col++){
//         console.log(arr[row][col])
//     }
// }

//or

// let brr = arr.flat()
// console.log(brr);

//ques - convert this to 3*3 matrix
// let arr = [1,2,3,4,5,6,7,8,9]

// let matrix = []
// for(let i=0;i<arr.length;i=i+3){
//     let temp=arr.slice(i,i+3)
//     matrix.push(temp)
// }
// console.log(matrix)

// or

// let matrix = []
// for(let i=0;i<arr.length;i=i+3){
//     let temp = []
//     for(let j=i;j<=i+2;j++){
//         temp.push(arr[j])
//     }
//     matrix.push(temp)
// }
// console.log(matrix)

// ************************************************************************

// ques- deep copy of matrix

// let m1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let m2 = [];
// for (let t of m1) {
//   let a1 = [...t];
//   m2.push(a1);
// }
// m1[0][0] = 10;
// console.log(m1);
// console.log(m2);

// or

// let m3 = structuredClone(m1)
// m1[0][0] = 10
// console.log(m1)
// console.log(m3)

// *************************************************************************

// let matrix = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ]

// left diagnonal

// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[0].length;j++){
//         if(i==j){
//             console.log(matrix[i][j])
//         }
//     }
// }

// or

// for(let i=0;i<matrix.length;i++){
//     console.log(matrix[i][i])
// }

// right diagonal

// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[0].length;j++){
//         if(i+j==matrix.length-1){
//             console.log(matrix[i][j])
//         }
//     }
// }

// or

// for(let i=0;i<matrix.length;i++){
//     console.log(matrix[i][matrix.length-1-i])
// }

// ***********************************************************************

// ques- print columns matrix where row size = col size

// let m1 = [
//         [10,20,30],
//         [40,50,60],
//         [70,80,90]
//     ]

// for(let row=0;row<m1.length;row++){
//     for(let col=0;col<m1[row].length;col++){
//         console.log(m1[col][row])
//     }
// }

// ques- print columns matrix for each case

// let m2 = [
//     [10,20],
//     [30,40],
//     [50,60]
// ]

// for(col=0;col<m2[0].length;col++){
//     for(let row=0;row<m2.length;row++){
//         console.log(m2[row][col])
//     }
// }

// **************************************************************************

// let m1 = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90],
// ];

// ques - print upper half of matrix

// for(let i=0;i<m1.length;i++){
//     for(let j=0;j<m1[i].length;j++){
//         if(j>i){
//             console.log(m1[i][j])
//         }
//     }
// }

// ques - print lower half of matrix

// for(let i=0;i<m1.length;i++){
//     for(let j=0;j<m1[i].length;j++){
//         if(i<j){
//             console.log(m1[i][j])
//         }
//     }
// }

// ********************************************************************

// ques - leaf elements of matrix (edge elements)

// let mat = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90],
//  [100,110,120]
// ];

// for(let i=0;i<mat.length;i++){
//     for(let j=0;j<mat[i].length;j++){
//         if(i==0|| j==0 || i==mat.length-1 || j==mat[i].length-1){
//             console.log(mat[i][j])
//         }
//     }
// }

// or

// in clockwise direction

// for(let top = 0; top<=mat[0].length-1; top++){
//     console.log(mat[0][top])
// }

// for(let right = 1; right<=mat.length-1; right++){
//     console.log(mat[right][mat[0].length-1])
// }

// for(let bottom = mat[0].length-2; bottom>=0; bottom--){
//     console.log(mat[mat.length-1][bottom])
// }

// for(let left = mat.length-2; left>=1; left--){
//     console.log(mat[left][0])
// }

// ********************************************************************

// ques - transpose of matrix where row size = column size

let mat1 = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

for(let i=0;i<mat1.length;i++){
  for(let j=0;j<mat1[0].length;j++){
    if(j>i){
      [mat1[i][j],mat1[j][i]] = [mat1[j][i],mat1[i][j]]
    }
  }
}
console.log(mat1)

// ques - transpose of matrix for each case

let mat2 = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
  [11, 12, 13],
];

let transpose = []
for(let col=0; col<mat2[0].length;col++){
  let a1 = []
  for(let row=0;row<mat2.length;row++){
    a1.push(mat2[row][col])
  }
  transpose.push(a1)
}
console.log(transpose);
