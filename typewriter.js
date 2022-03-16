const sentence = "Hello there from Lighthouse Labs!\n";

//Goal --> to print one letter at a time to console, like an animation

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, i * 200)
};