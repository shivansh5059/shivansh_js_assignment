function getMonthStartDate(date) {

    return new Date(date.getFullYear(), date.getMonth(), 1);

  }
  
  const dt = new Date("June 18, 2025");

const monthStart = getMonthStartDate(dt);

console.log(monthStart.toDateString());  // Output: "Sun Jun 01 2025"
