function sentenceCase(str) {
    return str
      .split('. ')
      .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase())
      .join('. ');
  }
  
  // Test
  console.log(sentenceCase('PHP exercises. python exercises.'));
  // "Php Exercises. Python Exercises."
  