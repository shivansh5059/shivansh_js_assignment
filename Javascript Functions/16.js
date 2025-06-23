function uniqueChars(str) {

    let result = '';

    for (let i = 0; i < str.length; i++) {

      if (!result.includes(str[i])) {
        result += str[i];
      }
    }
    return result;
  }
  const input = "thequickbrownfoxjumpsoverthelazydog";
console.log(uniqueChars(input));  
// Output: "thequickbrownfxjmpsvlazydg"
