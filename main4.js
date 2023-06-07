// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = parseInt(prompt('enter the radius')); 
let pi = 3.14;
let area = pi * radius * radius;
let circumference = 2 * pi * radius;

console.log('when the radius is ' + radius + '\nthen the result is')
console.log('the area of this circle is ' + area);
console.log('the circumference of this circle is ' + circumference);