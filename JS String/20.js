function formatted_string(pad, user_str, pad_pos) {
    user_str = user_str.toString();

    if (pad_pos === 'l') {
        
      return (pad + user_str).slice(-pad.length);
    } else {
      return (user_str + pad).substring(0, pad.length);
    }
  }
  