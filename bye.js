const bye = name => {
  const phrase = "Bye " + name;
  console.log(phrase);
  return phrase;
};

const goodBye = firstName => lastName => {
  const phrase = "Good Bye " + firstName + " " + lastName;
  console.log(phrase);
  return phrase;
};

module.exports = {
  bye,
  goodBye
};
