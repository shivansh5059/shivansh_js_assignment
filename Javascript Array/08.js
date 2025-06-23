function mostFrequent(arr) {
    let freqMap = {};
    let maxCount = 0;
    let mostFreqItem;
  
    for (let item of arr) {
      freqMap[item] = (freqMap[item] || 0) + 1;
  
      if (freqMap[item] > maxCount) {
        maxCount = freqMap[item];
        mostFreqItem = item;
      }
    }
  
    console.log(`${mostFreqItem} ( ${maxCount} times )`);
  }
  

  var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  mostFrequent(arr1);
  