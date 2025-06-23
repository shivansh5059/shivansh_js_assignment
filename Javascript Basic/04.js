const a =5, b =6, c =7;


const s = (a+b+c)/2;

// Heron's Formula

const area = Math.sqrt(s*(s-a)*(s -b)*(s-c));

console.log("Area of the triangle is:", area.toFixed(2)); 
