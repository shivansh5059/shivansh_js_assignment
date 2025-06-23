function hours_with_zeroes(dt) {
    let hours = dt.getHours() % 12 || 12;
    return String(hours).padStart(2, '0');
  }
  
 
  let dt = new Date(1989, 10, 1);
  console.log(hours_with_zeroes(dt)); // "12"
  