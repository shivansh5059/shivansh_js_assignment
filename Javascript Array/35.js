function getRandomItem(arr) {
    if (  arr.length === 0) return undefined;

    const randomIndex = Math.floor(Math.random() * arr.length);
    
    return arr[randomIndex];
  }
  
 
  const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

  console.log(getRandomItem(colors)); 
  