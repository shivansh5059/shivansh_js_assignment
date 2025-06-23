function numeric_month(dt) {
    
    return String(dt.getMonth() + 1).padStart(2, '0');
  }
  
 
  console.log(numeric_month(dt)); // "11"
  