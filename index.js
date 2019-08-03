class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    let result = str.split(" ").map(w => {
      let a = w.replace(/[0-9a-zA-Z]/, '');
      // let b = a.replace(/'/, '');

      return b.replace(/@#/, '');
      // return w.replace(/\W/, '')
    }).join(" ")
    // let result = str.replace(/\W/, '')
    return result
  }

  static titleize(str) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = str.split(" ");
    let result = words.map(word => {
      if (!exceptions.find(w => { return w === word })) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    }).join(" ")
    return result[0].toUpperCase() + result.slice(1);
  }
}
