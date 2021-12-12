function isPangram(string) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  
  const l = alphabet.every((letter) => string.toUpperCase().includes(letter));
  console.log(l);
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// alphabet.includes(letter)