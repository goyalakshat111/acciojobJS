// 6 dec

// ques- find sum of num till it becomes a digit and return that digit
let num = 199
 while(num>=10){
    let sum=0
    while(num>0){
        let digit = num%10
        sum+= digit;
        num = parseInt(num/10)
    }
    num = sum;
}

console.log(num)
