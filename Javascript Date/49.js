function diff_years(dt1, dt2) {

    const year1 = dt1.getFullYear();

    const year2 = dt2.getFullYear();

    return Math.abs(year2 - year1);
  }
  const dt1 = new Date("January 10, 2010");
const dt2 = new Date("October 25, 2023");

console.log(diff_years(dt1, dt2)); 
