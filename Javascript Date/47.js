function diff_weeks(dt1, dt2) {
    const oneWeek = 1000 * 60 * 60 * 24 * 7; // milliseconds in one week
    
    const diffMs = Math.abs(dt2 - dt1); 
    
    
    return Math.floor(diffMs / oneWeek);    
  }
  