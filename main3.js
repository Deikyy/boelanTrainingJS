// get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = parseInt(prompt('enter length: '));
let widht = parseInt(prompt('enter widht: '));
let area = length * widht;
let perimeter = 2 * (length + widht); 

console.log('length ' + length);
console.log('widht is ' + widht);
console.log('area is ' + area);
console.log('perimeter is ' + perimeter);

