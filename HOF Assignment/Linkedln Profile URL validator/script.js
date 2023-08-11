function validateLinkedInURL(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9_-]{5,30}[A-Za-z0-9]$/;
  
    if (regex.test(url)) {
      console.log("Valid LinkedIn profile URL");
    } else {
      console.log("Invalid LinkedIn profile URL");
    }
  }
  
  //url of linkedin profile

  validateLinkedInURL("https://www.linkedin.com/in/iqrahassan"); // Valid LinkedIn profile URL
  validateLinkedInURL("https://www.linkedin.com/in/vishwa-mohan"); // Valid LinkedIn profile URL
  validateLinkedInURL("https://www.linkedin.com/in/pkdoe-"); // Invalid LinkedIn profile URL
  validateLinkedInURL("https://www.linkedin.com/in/"); // Invalid LinkedIn profile URL
