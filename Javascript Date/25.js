function full_month(dt) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[dt.getMonth()];
  }
  

  const dt = new Date(2015, 10, 1);
  console.log(full_month(dt)); // "November"
  