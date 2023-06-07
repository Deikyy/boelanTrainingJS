// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

let enterHours = parseInt(prompt('enter your work hours: '));
let rateHours = parseInt(prompt('enter your charge per hour: '));
let earning = enterHours * rateHours; 

console.log('enter hours: ' + enterHours);
console.log('enter rate per hours: ' + rateHours);
console.log('your weekly earnings is Rp: ' + earning);