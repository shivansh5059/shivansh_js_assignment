const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

const o = ["th", "st", "nd", "rd"];

// Function to get ordinal suffix
function getOrdinal(n) {
  if (n % 100 >=11 && n % 100 <= 13)  return n + o[0]; // 11th, 12th, 13th (special case)

  switch (n % 10) {
    case 1: return n+o[1];   //1st

    case 2: return n + o[2];   //2nd

    case 3: return n + o[3]; //3rd

    default: return n + o[0];   // 4th , 5th, 6th--
  }
}

for (let i = 0; i < color.length; i++) {
  console.log(`${getOrdinal(i + 1)} choice is ${color[i].trim()}.`);
}
