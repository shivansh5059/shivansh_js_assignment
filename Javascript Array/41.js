function rangeBetween(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  console.log(rangeBetween(4, 7));     // [4, 5, 6, 7]
  console.log(rangeBetween(-4, 7));    // [-4, -3, ..., 7]
    