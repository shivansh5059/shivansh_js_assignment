function unix_to_time(timestamp) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

    const hours = date.getHours().toString().padStart(2, '0');

    const mins = date.getMinutes().toString().padStart(2, '0');

    const secs = date.getSeconds().toString().padStart(2, '0');
    
    return `${hours}:${mins}:${secs}`;
  }
  

  console.log(unix_to_time(1609459200)); // 00:00:00 (Jan 1, 2021)
  