// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

let myAge = parseInt(prompt('enter your age'));
let friendAge = parseInt(prompt('enter your friend age'));
let selisih = Math.abs(myAge - friendAge); 

if (myAge < friendAge) {
    console.log('im ' + selisih + ' younger than you')
} else if (myAge > friendAge) {
    console.log('im ' + selisih + ' older than you')
} else {
    console.log('we are at the same age')
} 