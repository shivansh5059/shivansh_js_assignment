function longestCountryName(countries) {
    let longest = "";
  
    for (let country in countries) {

      if (countries[country].length > longest.length) {
        longest = countries[country];
      }
    }
  
    return longest;
  }
  

  const countries = ["Australia", "Germany", "United States of America", "India"];

  console.log(longestCountryName(countries)); 

  