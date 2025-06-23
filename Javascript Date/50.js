function getWeekStartDate(date) {

    const day = date.getDay(); 

    const diff = date.getDate() - day;  // Assuming sunaday as first day of week

    return new Date(date.setDate(diff));
  }
  