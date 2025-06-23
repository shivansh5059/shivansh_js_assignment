function secondLowestGreatest(arr) {
  
    const sorted = [...new Set(arr)].sort((a, b) => a - b);

  
    if (sorted.length < 2) {

      return "Not enough unique elements.";

    }
  
    const secondLowest = sorted[1];
    
    const secondGreatest = sorted[sorted.length - 2];
  
    return {secondLowest, secondGreatest};
  }
  