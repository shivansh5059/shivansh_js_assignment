function diff_days(dt1, dt2) {

    const oneDay = 1000 * 60 * 60 * 24; 

    const diffMs = Math.abs(dt2 - dt1); 
    
    return Math.floor(diffMs / oneDay); 
  }
  