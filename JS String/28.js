function hex_to_ascii(hex) {
    let result = '';
    for (let i = 0; i < hex.length; i += 2) {

      result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return result;
  }
  

  console.log(hex_to_ascii('3132'));    // "12"
  console.log(hex_to_ascii('313030'));  // "100"
  