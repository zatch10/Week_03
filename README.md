# Week_03

## Functions

This provides a clean way of dividing your code into simple reusable parts. A function has a name, takes arguments, and returns something.

```Javascript
function sayHello(name) {
  return "Hello " + name;
}

sayHello("Aria")
sayHello("Alpri")
```

## Currying Functions

Lets start with a function that you pass in a name, and it prints out bye. 

```Javascript
function sayBye(firstName, lastName) {
  console.log("Bye " + firstName + " " + lastName)
}
```

Let's say we have the first name, but we dont have the last name yet. Instead of waiting to call the function, we can use currying. 

Instead we could write it differently. 
```Javascript
const goodBye = firstName => lastName => {
  console.log("Good Bye " + firstName + " " + lastName);
};
```

* If you type ```goodbye```, it says its a constant that points to a function. 
* If you type ```goodbye("Aria")```, it says its a constant that points to a function, but has ahready gotten the first variable. 
* If you type ```goodbye("Aria")("Malkani")```, it now has  the second variable, can can execute the function, so wit will print ```Good Bye Aria Malkani```

## Why is currying useful?

It allows you to export functions from one file and call them later when we have the arguments. For instance, we we make a file called "bye.js", we can add the function and export it like it's done below. 

```Javascript
const bye = name => {
  const phrase = "Bye " + name;
  console.log(phrase);
  return phrase;
};

module.exports = {
  bye
};
```
In index.js, we can now import the function and call it

```Javascript
const {bye} = require("./bye.js");
bye("Aria");
```

