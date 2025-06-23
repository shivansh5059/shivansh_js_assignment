function seconds_with_leading_zeros(date) {
    let sec = date.getSeconds();

    return sec < 10 ? '0' + sec : sec.toString();
  }
  
  let date = new Date(1989, 10, 1); 
  

  console.log(seconds_with_leading_zeros(date)); 
  