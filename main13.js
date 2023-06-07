// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.

let age = parseInt(prompt('Enter your age: ')); 
let long = age * 365 * 24 * 60 * 60;

console.log('your age is: ' + age + ' \nyou lived ' + long + ' seconds.')