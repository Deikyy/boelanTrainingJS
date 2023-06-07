// // Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

let firstName = prompt('enter your first name'); 
let familyName = prompt('enter your family name'); 

if (firstName.length < familyName.length) {
    console.log('your first name ' + firstName + ' is shorter than your family name')
} else if (firstName.length > familyName.length) {
    console.log('your first name ' + firstName + ' is longer than your family name'); 
} else {
    console.log('your first name and your family name has the same length');
}