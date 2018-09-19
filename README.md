# Week_03

# Javascript Fundamentals

### Translating Elements: Maps, Reduce, and Filters

Maps take in an array of elements and transform it to another array of elements. 

The easiest way to understand is looking through an example. 

The function below takes in an array of numbers, and wants to add the number to the new list only if the number matches the index. 

In the example below we want to multiply every number in the array by 2. A map statement allows us to do this is a much more readable fashion. 
```Javascript
// With mapping
let array = [1,2,3,4,5]
let newArray  = []
for(var i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
}
// With mapping
let mappedArray = array.map(elem => elem * 2)
```

Filters on the other hand take an array of element and return another array of elements of values that are all true for a certain condition. For instance, 

```Javascript
// Without filtering
let array = [1,2,3,4,5]
let newArray  = []
for(var i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      newArray.push(array[i]);
    }
}

// With filtering
let mappedArray =  array.filter(elem => elem % 3 === 0)
```

Reduce functions allow you to take an array and returns a single value. It evaulates each element on the array one at  a time, using the last value to get a new value. 


```Javascript
// Without reduce
let array = [1,2,3,4,5]
let sum = 0;
for(var i = 0; i < array.length; i++) {
  sum += array[i]
}

// With reduce
let reducedSum = array.reduce((prev, elem) => elem + prev)


```
