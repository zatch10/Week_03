# Week_03

# Javascript Fundamentals

### If/Case Statements

If stamenets will execute one option or the other depending on the condition 
```Javascript
let door = "Knock knock";
if (door === "Knock knock") {
    console.log("Who's there")
} else {
    console.log("Awkward silence")
}
```

To compare to values, you use "===" to see if they are the same or "!==" to see if they are different. When you use 2 equals instead of 3, you have to deal with javascripts equality table. See https://dorey.github.io/JavaScript-Equality-Table/. 


Switch statements evaulate multiple possibilities of the value and do different things in each case. 
```Javascript
let value = 2;
switch (value) {
    case 1: 
        console.log("One");
        break;
    case 2: 
        console.log("Two");
        break;
    default: 
        console.log("None");
}

```