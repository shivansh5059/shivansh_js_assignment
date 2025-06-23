function move(arr, from, to) {
    // Handle negative indices
    const len = arr.length;
    
    from = (from < 0) ? len + from : from;
    to = (to < 0) ? len + to : to;
  
    if (from >= len || to >= len || from < 0 || to < 0) return arr; 
  
    const element = arr.splice(from, 1)[0];  // Remove element from "from" index
    arr.splice(to, 0, element);              // Insert it at "to" index
    return arr;
  }
  
 
  console.log(move([10, 20, 30, 40, 50], 0, 2));   // [20, 30, 10, 40, 50]
  console.log(move([10, 20, 30, 40, 50], -1, -2)); // [10, 20, 30, 50, 40]
  