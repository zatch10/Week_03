const x = 10;
// x = 2 // not okay
console.log("X " + x);

let y = 6;
y = 7; //okay
console.log("Y " + y);

let name = "aria";
console.log("Name " + name);

let age = 20;
console.log("Age " + age);

let wantsBoba = true;
console.log("Wants Boba " + wantsBoba);

let favoriteThings = ["latea", 28, true];
console.log("Favorite Things " + favoriteThings);

let backwards = favoriteThings.reverse();
console.log("Backwards " + backwards);

let sliced = favoriteThings.slice(0, 2);
console.log("Sliced " + sliced);

favoriteThings.pop();
console.log("Favorite Things " + favoriteThings);

favoriteThings.pop();
console.log("Favorite Things " + favoriteThings);

favoriteThings.push("Kung Fu Tea");
console.log("Favorite Things " + favoriteThings);
