function add_months(date, months) {

    let result = new Date(date); 

    result.setMonth(result.getMonth() + months);

    return result;
  }
  
  let dt = new Date(2014, 10, 2); 

console.log(add_months(dt, 10).toString());
