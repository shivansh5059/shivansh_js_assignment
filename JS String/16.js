function text_truncate(str, length = str.length, ending = '…') {
    if (str.length <= length) return str;
    return str.slice(0, length - ending.length) + ending;
  }
  
 
  console.log(text_truncate('We are doing JS string exercises.'));           // "We are doing JS string exercises."
  console.log(text_truncate('We are doing JS string exercises.', 19));       // "We are doing JS ..."
  console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); // "We are doing !!"
  