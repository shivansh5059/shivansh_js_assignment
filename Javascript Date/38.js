function isDaylightSavingTime(date = new Date()) {

    const jan = new Date(date.getFullYear(), 0, 1);  

    const jul = new Date(date.getFullYear(), 6, 1);  
  
    const stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  
    return date.getTimezoneOffset() < stdTimezoneOffset;
  }
  

  const dt = new Date();

  console.log(isDaylightSavingTime(dt));  
  