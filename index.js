
let introCourses = [125, 173, 225, 233, 241, 374]
for (let i = 0; i < introCourses.length; i++) { 
  console.log(introCourses[i])
}

let count = 1;
while (count < 10){
    console.log("Count " + count)
    count += 1;
}
console.log("Done counting")

let student = {
  name: "Aria",
  age: 20, 
  favoriteBobaPlaces: ["latea", "teamoji", "kung fu tea"],
  friends: [
    {
      name: "Alpri", 
      age: 19
    }
  ]
}

console.log(student.name)
console.log(student.friends[0].name)

let students = {
  courses : []
}

for (let i = 0; i < introCourses.length; i++) { 
    students.courses.push(introCourses[i])
}
console.log(students)


