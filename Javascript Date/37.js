const now = new Date();

const timeZone = now.toString().match(/\(([^)]+)\)/)[1];

console.log(timeZone);
