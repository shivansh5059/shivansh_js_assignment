function getType(value) {
    if (value === null) return "null"; 

    if (Array.isArray(value)) return "array"; 

    return typeof value;
  }
  
 console.log( getType(25));