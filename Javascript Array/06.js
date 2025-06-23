function insertDashesBetweenEvens(num) {
    const numStr = num.toString();

    let result = numStr[0];
  
    for (let i = 1; i < numStr.length; i++) {

      const prevDigit = parseInt(numStr[i - 1]);
      const currDigit = parseInt(numStr[i]);
  
      if (prevDigit % 2 === 0 && currDigit % 2 === 0) {
        result += '-' + numStr[i];
      } else {
        result += numStr[i];
      }
    }
  
    return result;
  }
  
 
  const input = prompt("Enter a number:");
  
  console.log(insertDashesBetweenEvens(input));
  