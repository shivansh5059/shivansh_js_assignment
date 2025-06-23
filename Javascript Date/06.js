function add_minutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }
  console.log(add_minutes(new Date(2014, 10, 2), 30).toString());
// Output: "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"
