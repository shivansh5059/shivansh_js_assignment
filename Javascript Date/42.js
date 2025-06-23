function add_weeks(date, weeks) {

    const newDate = new Date(date); 

    newDate.setDate(newDate.getDate() + weeks * 7); 
    return newDate;
  }
  let dt = new Date(2014, 10, 2); // November 2, 2014 (months are 0-based)
console.log(add_months(dt, 10).toString());
