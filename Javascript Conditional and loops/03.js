function sortThreeNumbers(a, b, c) {
    let first, second, third;
  
    if (a >= b && a >= c) {
      first = a;
      if (b >= c) {

        second = b;

        third = c;
      } else {

        second = c;
        third = b;
      }
    }
     else if (b >= a && b >= c) {

      first = b;
      if (a >= c) {

        second = a;
        third = c;
      } 
      else {
        second = c;
        third = a;
      }
    }
     else {
      first = c;
      if (a >= b) {
        second = a;
        third = b;
      } else {
        second = b;
        third = a;
      }
    }
  
    alert("Sorted descending: " + first + ", " + second + ", " + third);
  }
  