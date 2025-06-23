function timeConvert(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${minutes} minutes = ${hours} hours and ${mins} minutes.`;
  }
  
  // Test
  console.log(timeConvert(200)); // "200 minutes = 3 hour(s) and 20 minute(s)."
  