function isLeapYear(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {

        console.log(year + " is a Leap Year");

    } 
    else {
        console.log(year + " is NOT a Leap Year");
    }
}

let input = prompt("Enter a year:");

let year = parseInt(input);


if (!isNaN(year)) {
    isLeapYear(year);
} 
else {
    console.log("Invalid input.");
}