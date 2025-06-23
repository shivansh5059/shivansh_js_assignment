function min_date(dates) {
    let min = new Date(dates[0]);
    
    for (let i = 1; i < dates.length; i++) {

      let current = new Date(dates[i]);

      if (current < min) {

        min = current;
      }
    }
    return min.toDateString();
  }
  