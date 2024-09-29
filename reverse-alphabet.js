const reverseAlphabet = (str) => {
  const alphabets = str.slice(0, -1).split("").reverse().join("");
  const number = str.slice(-1);
  return alphabets + number;
};

const str = "NEGIE1";
console.log(reverseAlphabet(str));
