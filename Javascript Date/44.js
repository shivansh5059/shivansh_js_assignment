function diff_minutes(dt1, dt2) {

    const difMs = Math.abs(dt1 - dt2); 

    return Math.floor(difMs / (1000 * 60)); 
  }
  
  let dt1 = new Date("October 13, 2014 11:11:00");
  
let dt2 = new Date("October 13, 2014 11:45:00");

console.log(diff_minutes(dt1, dt2)); 
