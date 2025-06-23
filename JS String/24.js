function truncate(str, numWords) {
    return str.split(" ").slice(0, numWords).join(" ");
  }
  
 
  console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
  // "The quick brown fox"
  