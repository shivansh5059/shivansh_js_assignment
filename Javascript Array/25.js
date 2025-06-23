function sortByTitle(library) {
    return library.sort((a, b) => {

      const titleA = a.title.toLowerCase();

      const titleB = b.title.toLowerCase();
  
      if (titleA < titleB) return -1;

      if (titleA > titleB) return 1;
      
      return 0;
    });
  }
  