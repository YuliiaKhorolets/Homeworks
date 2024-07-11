let text = "The Cyberiad has been widely praised and acknowledged for its writing, humor, and allegorical nature.";
let regExp = /\b[^aA ]{6,}\b/g;
let matches = text.match(regExp);
console.log(matches);