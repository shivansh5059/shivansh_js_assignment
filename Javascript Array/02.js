let original = [1, 2, [3, 4]];
let shallowClone  = original.slice(0);

shallowClone[2][0] = 99;  // will also change original  because only have reference to nested part

console.log(original); 
console.log(shallowClone);  




let deepCopy= JSON.parse(JSON.stringify(original));   // will not change original create seprate copy of nested object too

deepCopy[2][0] = 99;

console.log(original); // [1, 2, [3, 4]]
console.log(deepCopy);     // [1, 2, [99, 4]]
