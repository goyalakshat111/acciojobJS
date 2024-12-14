// 12 dec

//  <-------------------------------- string questions-2 ---------------------->

// ques- print each word in new line

// let str = 'Ram is dancing';
// console.log(str.split(' '))
// console.log(str.replaceAll(" ","\n"));


// ques- print each word in new line

// let str = 'Ram                   is dancing on   the   floor';
// str = str+" "
// let word = ""
// for(let t of str){
//     if(t!=" "){
//         word += t
//     }
//     else if(t==' '&& word!=""){
//         console.log(word)
//         word=""
//     }
// }


// ques- Ram is dancing -> maR si gnicad

// let str = "Ram is dancing";
// let rev = ''
// str = str +" "
// let word=''
// for(let t of str){
//     if(t!=' '){
//         word= t + word;
//     }
//     else{
//         rev += word +' '
//         word=''
//     }
// }
// console.log(rev)


// ques- Mukesh ambani Chaudhary --> M.A.Chaudhary
// let str1 = "Mukesh ambani Chaudhary";

// approach-1
// let word=''
// let s =''
// for(let t of str1){
//     if(t!=' '){
//         word = word+t
//     }
//     else{
//         s = s+word[0].toUpperCase()+".";
//         word='';
//     }
// }
// console.log(s+word)

// approach-2
// let arr = str1.split(' ')
// let str =''
// for(let i=0;i<=arr.length-2;i++){
//     str +=arr[i][0].toUpperCase()+"."
// }
// console.log(str + arr[arr.length-1])


// ques- replace each character with its next vlaue, but after z it will go to "a"
// Zakir --> Abljs

// let str = "Zakir";
// let res=''
// for(let t of str){
//     let charCode=  t.charCodeAt() +1
//     if(charCode==91 || charCode==123){
//         charCode = charCode-26
//     }
//     res += String.fromCharCode(charCode)
// }
// console.log(res)


// ques-  similar to above but move by k and k = 1000 

// let str = "Zakir";
// let k = 1000;
// let res=''
// for(let t of str){
//     if(t>='a'&& t<='z'){
//         charCode = t.charCodeAt(0) + k%26
//         if(charCode>122){
//             let diff = charCode-122
//             charCode = 96 +diff
//         }
//     }
//     else if(t>='A' && t<='Z'){
//         charCode = t.charCodeAt(0)+k%26
//         if(charCode>90){
//             let diff= charCode-90
//             charCode= 64 + diff
//         }
//     }
//     res += String.fromCharCode(charCode)
// }
// console.log(res)

// ques - check if version is upgraded or not

// let previous = "121.2.32"
// let current = "121.002.32"

// let prevArr = previous.split(".")
// let currArr = current.split(".")

// let flag =0

// for(let i=0;i<=2;i++){
//     let ans = letsCompare(+prevArr[i],+currArr[i])

//     if(ans!='same'){
//         console.log(ans)
//         flag =1;
//         break;
//     }
// }

// if(flag==0){
//     console.log("Same")
// }

// function letsCompare(a,b){
//     if(a>b){
//           return "Downgrade"
//     }
//      else if(a<b){
//              return "Upgrade"
//      }
//      else {
//          return "same"
//      }

// }


// ques-  print all substrings of string that are of length greater than 1

// let str = "Ram";

// for(let i=0;i<str.length;i++){
//     for(let j=i;j<str.length;j++){
//         let s = str.slice(i,j+1)
//         if(s.length>1){
//             console.log(s)
//         }
//     }
// }





