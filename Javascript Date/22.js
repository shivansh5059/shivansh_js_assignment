function ISO_numeric_date(date) {
    const day = date.getDay(); // 0 (Sun) to 6 (Sat)
    return day === 0 ? 7 : day;
  }
  
  // Test
  const dt = new Date(2015, 10, 1); // Nov 1, 2015 => Sunday
  console.log(ISO_numeric_date(dt)); // 7
  