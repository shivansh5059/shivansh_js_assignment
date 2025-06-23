function getMonthEndDateAlt(date) {
    const year = date.getFullYear();
    
    const month = date.getMonth();
  
    let day = 28;

    while (true) {

      const testDate = new Date(year, month, day + 1);

      if (testDate.getMonth() !== month) {

        return new Date(year, month, day);

      }

      day++;
    }
  }
  