function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  console.log(getDaysInMonth(1, 2012));  // Jan → 31
console.log(getDaysInMonth(2, 2012));  // Feb → 29 
console.log(getDaysInMonth(9, 2012));  // Sep → 30

