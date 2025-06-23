function sumIndexValues(arr1, arr2) {
    let minLength = Math.min(arr1.length, arr2.length);
    let result = [];
     let i;
    for (i =0; i < minLength; i++) {

      let val1 = arr1[i] ;

      let val2 = arr2[i];

      result.push(val1 + val2);
    }
    //if anything left in arr1
     while(i<arr1.length){
        result.push(arr1[i]);
        i++;
     }
     
    // if anything left in arr2
     while(i<arr2.length){
        result.push(arr2[i]);
        i++;
     }
    return result;
  }
  

  let array1 = [1, 0, 2, 3, 4];
  let array2 = [3, 5, 6, 7, 8, 13];
  
  console.log(sumIndexValues(array1, array2)); // [4, 5, 8, 10, 12, 13]
  