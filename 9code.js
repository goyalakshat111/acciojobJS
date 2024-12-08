// 25 nov

//     *
//    ***
//   *****
//  *******
// *********

// let x = 1
// for(let i=1;i<=5;i++){
//   let s = ""
//   for(let j=4;j>=i;j--){
//     s += " "
//   }
  
//   let str =""
//   for(let j=1;j<=x;j++){
//     str = str+"*"
//   }
//   console.log(s+str)
//   x = x+2
// }


//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

let n = 9
let x = 1
let y = parseInt(n/2)
for (let i = 1; i <= n; i++) {

	let s = ''
	for (let sp = y; sp >= 1; sp--) {
		s += ' '
	}

	let str = ''
	for (let col = 1; col <= x; col++) {
		str += '*'
	}
	console.log(s + str)

	if (i <=parseInt(n/2)) {
		x = x + 2
		y--
	}
	else {
		x = x - 2
		y++
	}

}
