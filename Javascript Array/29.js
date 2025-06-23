function num_string_range(start, end, step = 1) {
    const result = [];
    

    if (typeof start === 'string' && typeof end === 'string') {
      let s = start.charCodeAt(0);
      let e = end.charCodeAt(0);
  
      for (let i = s; i <= e; i += step) {
        result.push(String.fromCharCode(i));
      }
    }
    
    else if (typeof start === 'number' && typeof end === 'number') {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    }
  
    return result;
  }
  