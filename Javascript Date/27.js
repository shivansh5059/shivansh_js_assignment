function short_months(dt) {
    const shortMonths = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
    return shortMonths[dt.getMonth()];
  }
  
 
  console.log(short_months(dt)); // "Nov"
  