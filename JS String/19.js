function escape_HTML(str) {
    
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
  

    return str.replace(/[&<>"']/g, function(m) {
      return map[m];
    });
  }
  