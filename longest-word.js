const longest = (sentence) => {
  const words = sentence.split(" ");
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return `${longestWord}: ${longestWord.length} character`;
};

const sentence = "Saya adalah seorang web developer";
console.log(longest(sentence));
