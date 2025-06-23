
const today =new Date();


let christmas = new Date(today.getFullYear(), 11, 25); 


if (today > christmas) {
    christmas = new Date(today.getFullYear() + 1, 11, 25);
}

const diff = christmas - today;



const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));


console.log(`Days left until Christmas: ${daysLeft}`);
