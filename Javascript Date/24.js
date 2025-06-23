function ISO8601_week_no(date) {
    const tmpDate = new Date(date.getTime());



  
    const yearStart = new Date(tmpDate.getFullYear(), 0, 1);
    
    const weekNo = Math.ceil((((tmpDate - yearStart) / 86400000) + 1) / 7);
    return weekNo;
  }
  
  const dt = new Date(2015, 10, 1)
  console.log(ISO8601_week_no(dt)); // 44
  