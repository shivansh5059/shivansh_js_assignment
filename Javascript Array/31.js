function remove_element(arr, value) {

    return arr.filter( (element) =>{

      return element !== value;
    });
  }
  
 
  console.log(remove_element([2, 5, 9, 6], 5)); 
  