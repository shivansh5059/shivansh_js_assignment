

function get_am_pm_uppercase(dt) {
    return dt.getHours() < 12 ? 'AM' : 'PM';
  }
  
  // Test
  console.log(get_am_pm_uppercase(new Date(2025, 5, 21, 9)));  // "AM"
  console.log(get_am_pm_uppercase(new Date(2025, 5, 21, 17))); // "PM"
  