function add_years(date, years) {

    const newDate = new Date(date);  

    newDate.setFullYear(newDate.getFullYear() + years);

    return newDate;
  }
  
  const dt = new Date(2014, 10, 2); 
   
console.log(add_years(dt, 10).toString());