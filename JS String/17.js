function string_chop(str, size) {
    if (!size) return [str];
  
    let chunks = [];
    for (let i = 0; i < str.length; i += size) {
      chunks.push(str.slice(i, i + size));
    }
    return chunks;
  }

  console.log(string_chop('w3resource'));      // ["w3resource"]
  console.log(string_chop('w3resource', 2));   // ["w3", "re", "so", "ur", "ce"]
  console.log(string_chop('w3resource', 3));   // ["w3r", "eso", "urc", "e"]
  