function is_weekend(dateString) {
    const date = new Date(dateString);
    const day = date.getDay();
    return day === 0 || day === 6;  // 0 = Sunday, 6 = Saturday
  }
  console.log(is_weekend('Nov 15, 2014')); // true (Saturday)
  console.log(is_weekend('Nov 16, 2014')); // true (Sunday)
  console.log(is_weekend('Nov 17, 2014')); // false (Monday)
    