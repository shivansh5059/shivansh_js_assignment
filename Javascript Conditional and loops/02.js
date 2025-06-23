function productSign(a, b, c) {

    const product = a * b * c;

    if (product > 0) {

      alert("The sign is +");

    } else if (product < 0) {

      alert("The sign is -");
      
    } else {
      alert("The product is 0");
    }
  }
  