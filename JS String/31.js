function escape_html(str) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return str.replace(/[&<>"']/g, char => map[char]);
  }
  

  console.log(escape_html('PHP & MySQL'));  // "PHP &amp; MySQL"
  console.log(escape_html('3 > 2'));        // "3 &gt; 2"
  