const order = words =>
  words
    ? words.split(" ").sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(" ")
    : "";
