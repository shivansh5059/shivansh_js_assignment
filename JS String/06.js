function protect_email(email) {
    const [user, domain] = email.split("@");

    const visible = user.slice(0, user.indexOf("_") );
    return `${visible}...@${domain}`;
  }
  
  console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"
  