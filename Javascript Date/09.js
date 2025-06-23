function lastday(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }
  console.log(lastday(2014, 0));   // 31 (Jan)
console.log(lastday(2014, 1));   // 28 (Feb)
console.log(lastday(2014, 11));  // 31 (Dec)
