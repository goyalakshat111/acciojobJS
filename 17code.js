// 9 Dec

// String 

// Different ways of initialization of string

// let str = 'hello';
// let str1 = "hello";
// let str2 = `hello`;

// console.log(str,typeof str)
// console.log(str,typeof str1)
// console.log(str,typeof str2)


// let name = 'akshat';
// console.log(name + " is dancing on the floor")          
// console.log(name, "is dancing on the floor")            //space is given by comma, we don't need to care
// console.log(`${name} is dancing on the floor`)


// multiline string

// let str = "Ram is danicng on the \
// floor and he is a good dancer \
// and he is a good singer and \
// he is a good actor"
// console.log(str)

// let str1 = "Ram is\n dancing"
// console.log(str1)

// let str2 = ` Ram is
//    dancing
//       on 
//          the 

//          floor
// `
// console.log(str2)

// let str1 = "" // kuch bhi nahi
// let str2 = " " // ek space

// console.log(str1+2)
// console.log(str2+2)

// ***********************************************************************

// arithmetic operations

// +
// string + num = string
// let s1 = "12"
// let s2 = 12 
// let ans = s1 + s2
// console.log(ans, typeof ans)  

// -, *, /, %, **
// string - num = number
// let s1 = "45"
// let s2 = 12
// let ans = s1 - s2
// console.log(ans, typeof ans) 

// string-num = NaN
// let s1='hello'
// let s2= 5;
// let ans = s1-s2;
// console.log(ans,typeof ans)
// *******************************************************************************

// string to number

// let str = '12'
// let ans = Number(str)
// console.log(ans,typeof ans)

// let str1 = '12'
// let ans1 = str1-0
// console.log(ans1,typeof ans1)

// let str2 = '12'
// let ans2 = + str2
// console.log(ans2,typeof ans2)

// let str3 = 'hello'
// let ans3 = Number(str3)
// console.log(ans3, typeof ans3);        // NaN number

// ****************************************************************************

// number to string

// let n = 56;
// let ans = String(n);
// let ans1 = n.toString();
// let ans2 = n + ""

// console.log(ans, typeof ans)
// console.log(ans1, typeof ans1)
// console.log(ans2, typeof ans2)

// **********************************************************************

// let str = "hello_world"

// length
// let length = str.length;
// console.log(length);

// index
// console.log(str[0])                       // 0th index value
// console.log(str[100])                       // undefined
// console.log(str[str.length-1])               // last index value

// charAt
// console.log(str.charAt(0))
// console.log(str.charAt(100))                // empty

//************************************************************

// let str = 'hello';

// print character of string

// for loop
// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }

// for-of loop
// for(let t of str){
//     console.log(t)
// }

// for-in loop    - not preferred to use
// for(let key in str){
//     console.log(str[key])
// }

// *************************************************************************

// reverse a string

// let str = 'ramesh';
// let reverse = '';
// for(let i=str.length-1;i>=0;i--){
//     reverse += str[i]
// }
// console.log(reverse)

// or 

// let str = 'ramesh';
// let reverse = '';
// for(let i=0;i<str.length;i++){
//     reverse = str[i]+reverse
// }
// console.log(reverse)

// **************************************************************

// strings are immutable

// value of variable can change
// let str = 'hello';
// str = 'world'
// console.log(str)              // world

// but we can't change string
// let str1 = 'hello';
// str1[0] = 'y';
// console.log(str1)             // hello 

// replace() - replaces only one character from left
// let str = 'kaka';
// let ans= str.replace('k','p');
// console.log(ans)
// console.log(str)

//replaceAll() - replaces all characters(version 17)
// let str = 'kaka';
// let ans = str.replaceAll('k','p');
// console.log(ans)
// console.log(str)

// replaceAll without using replaceAll
// let str =  'kaka';
// let ans ='';
// for(let t of str){
//     if(t!='k'){
//         ans +=t;
//     }
//     else{
//         ans+="p"
//     }
// }
// console.log(ans)

// ******************************************************************

// ASCII Values

// A-Z      = 65-90
// a-z      = 97-122
// "0"-"9"  = 48-57
// " "      = 32

// to find ascii value of character - charCodeAt(index)

// let s="A";
// console.log(s.charCodeAt(0))

// let s1= 'hello'
// console.log(s1.charCodeAt(2))

// to find character from ascii value - String.fromCharCode(ascii_value)

// let n = 122;
// console.log(String.fromCharCode(n));


// In JavaScript, when comparing strings it is done based on the Unicode values of the characters. 
// ques- 
// let s1='A';
// let s2='a';
// console.log(s1>s2)             // 65>90 --> false

// ques-
// let s1 = 'ramesh';
// let s2 = 'rajesh';
// console.log(s1>s2)                // m>j  --> true

// ques-
// let s1 = 'Ramesh';
// let s2 ='rajesh';
// console.log(s1>s2)                 // r > R --> false

// ques
// let s1 = "2";
// let s2 = "10"
// console.log(s1>s2)                   // 2>1 --> true

//ques-  convert capital letter to small letter
// let ch = 'S';
// let val = ch.charCodeAt(0);
// val = val+32;
// let ans = String.fromCharCode(val)
// console.log(ans);

// ques- convert small to capital letter
// let ch = 'k';
// let val = ch.charCodeAt(0);
// val = val-32;
// let ans = String.fromCharCode(val)
// console.log(ans);

// convert small letter string to capital letter string
// let str = 'hello';
// let newStr ='';
// for(let t of str){
//     let value= t.charCodeAt(0);
//     value = value-32;
//     let ch = String.fromCharCode(value)
//     newStr += ch;
// }
// console.log(newStr)


// toUpperCase(), toLowerCase() 

// let str = 'hELLo'
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

//ques- check if it's small or capital letter

// let ch='a';
// let upperCase = ch.toUpperCase();
// if(ch==upperCase){
//     console.log("Capital Letter")
// }
// else{
//     console.log("Small letter")
// }

// ******************************************************************

// indexOf(character or string, starting index)

// let str = 'akshat'
// console.log(str.indexOf('a'))        //0
// console.log(str.indexOf('a',2))      //4
// console.log(str.indexOf('ksh'))      //1

// lastIndexOf(character, starting index from last)
// let str = 'akshat';
// console.log(str.lastIndexOf('a'))
// console.log(str.lastIndexOf('a',3))

//slice - print left to right

// let str = 'akshat';
// console.log(str.slice(2))
// console.log(str.slice(2,2))             //empty
// console.log(str.slice(2,5))
// console.log(str.slice(5,2))            // empty
// console.log(str.slice(2,-2))


//substring - doesn't support negative indexing
// let str = 'hello'
// console.log(str.substring(2))    // llo
// console.log(str.substring(2,2))    // empty
// console.log(str.substring(2,5))  // llo
// console.log(str.substring(5,2))  // llo       (changes it internally to str.substring(2,5))

// substr(index,no.of values to print) - removed in new version
let str = "abhishek"
console.log(str.substr(3, 3))
console.log(str.substr(3))
console.log(str.substr(-3, 3))

