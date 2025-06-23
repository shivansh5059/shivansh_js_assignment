function insert(mainStr, subStr = '', pos = 1) {
    return mainStr.slice(0, pos) + subStr + mainStr.slice(pos);
  }
  

  console.log(insert('We are doing some exercises.'));                          // "We are doing some exercises."
  console.log(insert('We are doing some exercises.', 'JavaScript '));           // "JavaScript We are doing some exercises."
  console.log(insert('We are doing some exercises.', 'JavaScript ', 18));       // "We are doing some JavaScript exercises."
  