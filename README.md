# Week_03

# Javascript Fundamentals

## Variables

### Variables
Const implies that a variable is immutable, meaning we can never change it again. Let on the other hand means we can change the value of that variable. 

```Javascript
const x = 10; 
x = 2 // not okay

let y = 6;
y = 7; //okay
```
You can assign strings, numbers, booleans, arrays, and objects to any value. 

```Javascript
let name = "aria"
let age = 20;
let wantsBoba = true;
```

Arrays can have values of any type and can be manipulated. Here are a couple examples, but there is a lot more that you can do. 
```Javascript
let favoriteThings = ['latea', 28, true]
let backwards = favoriteThings.reverse()
let sliced = favoriteThings.slice(0,2)
favoriteThings.pop()
favoriteThings.pop()
favoriteThings.push("Kung Fu Tea")
```