let array = [1,2,3,4,5]
let newArray  = []
for(var i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
}
// console.log(newArray)

let mappedArray = array.map(elem => elem * 2)
console.log(mappedArray)


array = [1,2,3,4,5,6]
newArray  = []
for(var i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      newArray.push(array[i]);
    }
}
console.log(newArray)

mappedArray = array.filter(elem => elem % 3 === 0)
console.log(mappedArray)

array = [1,2,3,4,5]
let sum = 0;
for(var i = 0; i < array.length; i++) {
  sum += array[i]
}
console.log(sum)

let reducedSum = array.reduce((prev, elem) => {
    return elem + prev
})
console.log(reducedSum)