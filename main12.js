// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

let birthDate = parseInt(prompt('Enter your birthDate: '))
let selisih = Math.abs(2023 - birthDate); 
let enough = 18 - selisih;

if (selisih < 18) {
    console.log('you are ' + selisih + ' you will be allowed to drive after ' + enough + ' years');
} else {
    console.log('youre old enough to drive')
}