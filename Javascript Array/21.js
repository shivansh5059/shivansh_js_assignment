function flatten(arr, shallow = false) {

    return shallow ? arr.flat(1) : arr.flat(Infinity);   // inbuilt
  }
  



  // Manual

//   function flatten(arr, shallow) {
//     var result = [];
//     arr.forEach(function(val) {
//       if (Array.isArray(val)) {
//         result = result.concat(shallow ? val : flatten(val));
//       } else {
//         result.push(val);
//       }
//     });
//     return result;
//   }
  

  console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));         // [1, 2, 3, 4, 5, 6]
  console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));   // [1, 2, 3, [[4]], 5, 6]
  