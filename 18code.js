// 10 dec

//  <--------------------------------string questions---------------------->

//ques1- reverse the string
// let str = 'akshat';

// string doesn't have reverse() method

// split("") - convert string to array
// let str1 = str.split('')
// console.log(str1)

// reverse() - reverse the array
// let str2 = str1.reverse()
// console.log(str2)

// join('by default add comma') - convert array to string    
// let str3 = str2.join('')
// console.log(str3)

// or
// let str4 = str.split('').reverse().join('')
// console.log(str4)


//ques2- sum of digits using string
// let n = 34125

// let str = String(n)
// let sum=0
// for(let t of str){
//     sum += +t
// }
// console.log(sum)


//ques3-  you are given a username and a password
// A password is valid if its min of 8 digit and contains atleast 1 uppercase, 1 lowercase, 1 number,
// and 1 special character. Also, it should not contain username in it

// let username = 'akshat'
// let password = 'Akshat@2001'

// function isValid(name,password){
//     if(password.length<8){
//         return false;
//     }
//     if(password.includes(name)){
//         return false;
//     }

//     let capitalCount=0;
//     let smallCount=0;
//     let numberCount=0;
//     let specialCount=0;

//     for(let t of password){
//         if(t>="A"&&t<="Z"){
//             capitalCount++;
//         }
//         else if(t>="a"&&t<="z"){
//             smallCount++;
//         }
//         else if(t>='0'&& t<='9'){
//             numberCount++
//         }
//         else{
//             specialCount++
//         }        
//     }

//     if(capitalCount<1 || smallCount<1 || numberCount<1|| specialCount<1){
//         return false;
//     }

//     return true;  
// }

// let result = isValid(username,password);
// console.log(result)

// **************************************************************************** 

// Math.random() => gives random value between 0 and 1
// parseInt(Math.random()*20) ===> gives random integer value between 0 and 20

//e.g.-  for 10 to 20
// let x = 10 + parseInt(Math.random()*10);
// console.log(x)

// find random color
// let arr = ["red","green","blue","yellow","pink","black","white","purple","orange","brown"]
// let randomIndex = parseInt(Math.random()*arr.length)
// console.log(randomIndex, arr[randomIndex])

// *****************************************************************************

// ques4- Generate a 6 digit random password. It should contain atleast 1 uppercase, 1 lowercase, 
// 1 number and 1 special character

// let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let lowercase = "abcdefghijklmnopqrstuvwxyz"
// let numbers = "0123456789"
// let special = "!@#$%^&*+_"

// let str = uppercase + lowercase + numbers +special;
// let randomPassword = "";

// let u = uppercase[parseInt(Math.random()*uppercase.length)]
// let l = lowercase[parseInt(Math.random()*lowercase.length)]
// let n = numbers[parseInt(Math.random()*numbers.length)]
// let s = special[parseInt(Math.random()*special.length)]

// randomPassword += u+l+n+s;

// for(let i=1;i<=2;i++){
//     randomPassword += str[parseInt(Math.random()*str.length)]
// }
// console.log(randomPassword);

// ques5- print star pattern as below
// *
// **
// ***
// ****
// *****

// let str='*****'
// for(let i=0;i<5;i++){
//     console.log(str.slice(0,i+1))
// }


// ques 6- take a string and check if it is palindrome

// let s = 'naman'
// let rev = s.split('').reverse().join('')
// console.log(s==rev?'palindrome':'not palindrome')


// ques 7- take a string and check minimum how many characters should be change to make it palindrome 

// let s1 = 'abcdefghijk';
// let i=0
// let j= s1.length-1
// let count=0
// while(i<j){
//     if(s1[i]!=s1[j]){
//         count++
//     }
//     i++
//     j--
// }
// console.log(count)

// ******************************************************************************************

// trim() - remove corner empty spaces
// let str = '    ramesh   '
// console.log(str)
// console.log(str.trim())

// includes('character or string') - return true or false
// let str = 'akshat';
// let res = str.includes('k')
// let res1 = str.includes('sha')
// console.log(res)
// console.log(res1)

// startsWith('string or char',starting index), endsWith('string or char',ending index+1)
// let str = 'abhishek';
// let res = str.startsWith('a')
// let res1 = str.startsWith('abhi')
// let res2 = str.startsWith('ish',3)
// console.log(res,res1,res2);


// let str1 = 'ramesh';
// let ans = str1.endsWith('esh')
// let ans1 = str1.endsWith('s',5)
// let ans2 = str1.endsWith('am',3)
// console.log(ans,ans1,ans2);

// repeat()
// let str = 'hello';
// console.log(str.repeat(5))
// console.log('*'.repeat(4))