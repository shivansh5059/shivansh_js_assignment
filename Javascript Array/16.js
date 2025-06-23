function findLeapYears(start, end) {
    const leapYears = [];

    for (let year =start; year <=end; year++) {

      if ((year % 4 ===0 && year % 100 !==0) || year % 400 ===0) {

        leapYears.push(year);
      }
    }
    return leapYears;
  }
  
 
  console.log(findLeapYears(2000, 2025));
  // Output: [2000, 2004, 2008, 2012, 2016, 2020, 2024]
  