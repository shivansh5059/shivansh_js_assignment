function days_passed(date) {
    const start = new Date(date.getFullYear(), 0, 1); 

    const diff = date - start;
    return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
  }
  

  console.log(days_passed(new Date(2015, 0, 15)));   // 15
  console.log(days_passed(new Date(2015, 11, 14)));  // 348
  