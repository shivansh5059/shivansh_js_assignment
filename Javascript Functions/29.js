function getFunctionName(fn) {
    return fn.name;
  }

  function myExampleFunction() {
    // some logic
  }
  
  console.log(getFunctionName(myExampleFunction)); 


  const anon = function() {};
  
  console.log(getFunctionName(anon)); // Output: "anon"
  
  const arrow = () => {};

  console.log(getFunctionName(arrow)); // Output: "arrow" 
    