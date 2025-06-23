function curday(separator = '/') {
    const date = new Date();

    const mm = String(date.getMonth() + 1).padStart(2, '0');

    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}${separator}${dd}${separator}${yyyy}`;
  }
  
  console.log(curday('/')); // e.g., "06/21/2025"
console.log(curday('-')); // e.g., "06-21-2025"
