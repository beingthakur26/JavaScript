// let score = 33
let score = "33abc"

console.log(typeof score); // string
console.log(typeof(score)); // string


let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN (not a number)


let num = null
let num_number = Number(num)
console.log(num_number); // 0
console.log(typeof num_number); // number 


// conversion :
// 33 => 33
// "33abc" => NaN
// true => 1
// false => 0

