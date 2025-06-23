function calculate_age(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    return age;
  }
  

  console.log(calculate_age(new Date(1982, 11, 4))); // 42 
  console.log(calculate_age(new Date(1962, 1, 1)));  // 63
  