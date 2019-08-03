class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str;
  }

  static titleize(str) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = str.split(" ");
    return words.map(word => {
      if (!exceptions.find(w => { return w === word })) {
        return word[0].toUpperCase() + word.slice(1);
      }
    }).join(" ")
  }
}
