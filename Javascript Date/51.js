function getWeekEndDate(date) {
    const day = date.getDay(); 

    const diff = date.getDate() + (6 - day); // days to next Saturday
    
    return new Date(date.setDate(diff));
  }
  