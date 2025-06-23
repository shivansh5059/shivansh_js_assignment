function repeat_string(str, count) {
    if (typeof str !== 'string' || typeof count !== 'number' || count < 0) {
      return "Error in string or count.";
    }
    return str.repeat(count);
  }
  

  console.log(repeat_string('a', 4));  // "aaaa"
  console.log(repeat_string('a'));     // "Error in string or count."
  