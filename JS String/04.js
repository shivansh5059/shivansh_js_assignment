function truncate_string(str, num) {
    return str.slice(0, num);
  }
  
  // Test
  console.log(truncate_string("Robin Singh", 4)); // "Robi"
  