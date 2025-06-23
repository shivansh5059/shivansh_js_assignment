function abbrev_name(name) {
    const parts = name.trim().split(" ");
    if (parts.length < 2) return name;
    
    return `${parts[0]} ${parts[1][0].toUpperCase()}.`;
  }
  
  console.log(abbrev_name("Robin Singh")); // "Robin S."
  