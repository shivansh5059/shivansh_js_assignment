function yesterday(dateStr) {
    const date = new Date(dateStr);
    
    date.setDate(date.getDate() - 1);
    return date.toDateString();
  }
  console.log(yesterday('Nov 15, 2014')); // "Fri Nov 14 2014"

console.log(yesterday('Nov 16, 2015')); // "Sun Nov 15 2015"

console.log(yesterday('Nov 17, 2016')); // "Wed Nov 16 2016"
