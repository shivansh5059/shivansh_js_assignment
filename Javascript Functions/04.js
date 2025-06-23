function sortString(str) {

    return str.split('').sort().join('');

  }
  

  const input = 'webmaster';

  const sorted = sortString(input);
  
  console.log(sorted);  
  