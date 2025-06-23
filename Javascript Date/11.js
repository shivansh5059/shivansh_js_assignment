function max_date(dates) {
    let max = new Date(dates[0]);
    for (let i = 1; i < dates.length; i++) {
      let current = new Date(dates[i]);
      if (current > max) {
        max = current;
      }
    }
    return max.toDateString();
  }
  console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output: "2015-02-02"
