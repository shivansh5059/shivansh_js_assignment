function findLargest(a, b, c, d, e) {
    let largest;
  
    if (a >= b && a >= c && a >= d && a >= e) {

      largest = a;

    } else if (b >= a && b >= c && b >= d && b >= e) {

      largest = b;

    } else if (c >= a && c >= b && c >= d && c >= e) {

      largest = c;
    } 
    else if (d >= a && d >= b && d >= c && d >= e) {
      largest = d;
    }
     else {
      largest = e;
    }
  
    alert("The largest number is: " + largest);
  }
  