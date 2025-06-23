function removeDuplicatesIgnoreCase(arr) {
    const seen = new Set();

    return arr.filter(item => {

      const lower = item.toLowerCase();

      if (seen.has(lower)) return false;

      seen.add(lower);
      return true;
    });
  }
  

  const input = ["Apple", "Banana", "apple", "ORANGE", "banana", "Grape"];
  const result = removeDuplicatesIgnoreCase(input);
  
  console.log(result); // Output: ["Apple", "Banana", "ORANGE", "Grape"]
  