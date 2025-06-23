function humanize_format(number) {
    if (typeof number !== 'number') return;
  
    if (number % 100 >= 11 && number % 100 <= 13) {
      return number + 'th';
    }
  
    switch (number % 10) {
      case 1: return number + 'st';
      case 2: return number + 'nd';
      case 3: return number + 'rd';
      default: return number + 'th';
    }
  }
  

  console.log(humanize_format(1));     // "1st"
  console.log(humanize_format(8));     // "8th"
  console.log(humanize_format(301));   // "301st"
  console.log(humanize_format(402));   // "402nd"
  