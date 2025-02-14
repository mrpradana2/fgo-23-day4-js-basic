function transformSentence(sentence) {
  const splitSentence = sentence.split(" ");

  // jawaban soal no 4 a
  console.log(splitSentence.sort().reverse());
  // jawaban soal no 4 b
  let capitalSentence = splitSentence.join(" ").toUpperCase().split(" ");
  console.log(capitalSentence);

  // jawaban soal no 4 c
  capitalSentence.push("FAZZTRACK");
  console.log(capitalSentence);

  // jawaban soal no 4 d
  console.log(capitalSentence.reverse());

  // jawaban soal no 5 e
  console.log(capitalSentence.join(" "));
}

transformSentence("Saya Belajar Javascript");
