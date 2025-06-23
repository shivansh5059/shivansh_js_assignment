function get_am_pm_lowercase(dt) {
    return dt.getHours() < 12 ? 'am' : 'pm';
  }
  

  console.log(get_am_pm_lowercase(new Date(2025, 5, 21, 9)));  // "am"
  console.log(get_am_pm_lowercase(new Date(2025, 5, 21, 17))); // "pm"
  