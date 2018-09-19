const {bye, goodBye} = require("./bye.js");

function sayHello(name) {
  console.log("Hello " + name);
  return "Hello " + name;
}


sayHello("Aria");

bye("Aria");

goodBye("Aria")('Malkani');