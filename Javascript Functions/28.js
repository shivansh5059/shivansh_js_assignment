function greet(name) {
    return `Hello, ${name}!`;
  }
  
  function processUserInput(fn) {

    const name = "Alice";
    console.log(fn(name));
  }
  
 
  processUserInput(greet);
  