function short_year(dt) {
    return String(dt.getFullYear()).slice(-2);
  }
  

  const dt = new Date(1989, 10, 1);
  
  console.log(short_year(dt)); // "89"
  