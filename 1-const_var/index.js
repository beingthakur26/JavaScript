const acc_id = 1234567890; // This will throw an error because acc_id is a constant and cannot be reassigned
let acc_name = "John Doe";
var acc_pass = "password123";
const acc_balance = 1000.50; // This will throw an error because acc_balance is a constant and cannot be reassigned
acc_city = "New York" // acc_city is declared without var, let, or const, so it becomes a global variable
let acc_state;

// acc_id = 123456
acc_name = "Manas" // allowable because acc_name is declared with let
acc_pass = "password456" // allowable because acc_pass is declared with var
// acc_balance = 2000.75
acc_city = "Los Angeles" //allowable because acc_city is declared with var

/*
console.log(acc_id); // 1234567890
console.log(acc_name); // Manas
console.log(acc_pass); // password456
console.log(acc_balance); // 1000.50
console.log(acc_city); // los Angeles 
*/

console.table([
    acc_id,
    acc_name,
    acc_pass,
    acc_balance,
    acc_city,
    acc_state ]);

/*
Pefer to use let instead of var for variable declaration, as it has block scope and is less prone to errors.
Use const for constants that should not be reassigned.
*/