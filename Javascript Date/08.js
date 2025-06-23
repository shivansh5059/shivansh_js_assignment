function date_diff_indays(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = d2.getTime() - d1.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }

  console.log(date_diff_indays('04/02/2014', '11/04/2014'));  // 216
console.log(date_diff_indays('12/02/2014', '11/04/2014'));  // -28
