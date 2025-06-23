function capitalizeWords(str) {

    const words = str.split(' ');

    let result = '';
  
    for (let i = 0; i < words.length; i++) {

      const word = words[i];

      const capitalized = word[0].toUpperCase() + word.slice(1);

      result += capitalized + ' ';
      
    }
  
    return result.trim();
  }
  