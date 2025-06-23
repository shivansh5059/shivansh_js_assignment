function difference(arr1, arr2) {
    // Flatten both arrays (in case of nested arrays)
    const flat1 = arr1.flat(Infinity);
    const flat2 = arr2.flat(Infinity);
  
    // Combine and filter elements that are not in both
    return combined.filter((item) =>

        flat1.includes(item) !== flat2.includes(item)
      );
    }
  
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: [3, 100, 10]

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// Output: [2, 3, 4, 6]

