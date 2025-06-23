function diff_to_GMT(date) {
    const offsetMinutes = date.getTimezoneOffset();   // return diff in GMT and local time in Minutes
    const offsetHours = -offsetMinutes / 60; 
  
    
    return (offsetHours >= 0 ? "+" : "") + offsetHours.toFixed(3);
  }
  
 
  const dt = new Date();
  console.log(diff_to_GMT(dt));
  