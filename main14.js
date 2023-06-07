// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm





let dateTime = new Date();

// Format: YYYY-MM-DD HH:mm
let format1 = `${dateTime.getFullYear()}-${(dateTime.getMonth() + 1).toString().padStart(2, '0')}-${dateTime.getDate().toString().padStart(2, '0')} ${dateTime.getHours().toString().padStart(2, '0')}:${dateTime.getMinutes().toString().padStart(2, '0')}`;
console.log(format1);

// Format: DD-MM-YYYY HH:mm
let format2 = `${dateTime.getDate().toString().padStart(2, '0')}-${(dateTime.getMonth() + 1).toString().padStart(2, '0')}-${dateTime.getFullYear()} ${dateTime.getHours().toString().padStart(2, '0')}:${dateTime.getMinutes().toString().padStart(2, '0')}`;
console.log(format2);

// Format: DD/MM/YYYY HH:mm
let format3 = `${dateTime.getDate().toString().padStart(2, '0')}/${(dateTime.getMonth() + 1).toString().padStart(2, '0')}/${dateTime.getFullYear()} ${dateTime.getHours().toString().padStart(2, '0')}:${dateTime.getMinutes().toString().padStart(2, '0')}`;
console.log(format3);
