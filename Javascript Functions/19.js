function largerThanNumber(arr, num) {

    return arr.filter(element => element > num);

  }
  

  const array = [1, 5, 8, 10, 3, 7];

  console.log(largerThanNumber(array, 6)); 
  