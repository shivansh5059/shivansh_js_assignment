function internet_time(dt = new Date()) {
    // Convert local time to UTC
    const utcHours = dt.getUTCHours();
    const utcMinutes = dt.getUTCMinutes();
    const utcSeconds = dt.getUTCSeconds();
  
    // Add 1 hour to UTC to get BMT (Biel Mean Time)
    const totalSeconds = ((utcHours + 1) % 24) * 3600 + utcMinutes * 60 + utcSeconds;
  
    // There are 86,400 seconds in a day, 1000 beats in a day
    const beat = Math.floor(totalSeconds / 86.4);
  
    // Return 3-digit string
    return String(beat).padStart(3, '0');
  }
  

  const dt = new Date(1989, 10, 1); 
console.log(internet_time(dt));  // "812" 
