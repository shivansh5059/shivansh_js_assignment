function array_filled(length, value) {
    
    return Array(length).fill(value);
  }
  
  
  console.log(array_filled(3, 'default value'));  // ["default value", "default value", "default value"]
  console.log(array_filled(4, 'password'));       // ["password", "password", "password", "password"]
  