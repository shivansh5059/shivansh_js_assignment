function day_of_the_month(date) {
    return date.getDate().toString().padStart(2, '0');
  }
  

  let d = new Date(2015, 10, 1);
  console.log(day_of_the_month(d)); // "01"
  