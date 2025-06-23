function english_ordinal_suffix(date) {
    const day = date.getDate();

    if (day >= 11 && day <= 13) return day + 'th';

    switch (day % 10) {

      case 1: return day + 'st';
      
      case 2: return day + 'nd';
      case 3: return day + 'rd';
      default: return day + 'th';
    }
  }
  

  console.log(english_ordinal_suffix(dt)); // "1st"
  