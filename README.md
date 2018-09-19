# Week_03


#Dependencies

Let's say I want to generate a unique identifier (uuid), but I dont want to actually write that logic since I know someone has done it before. 

People can write libraries and upload them to npm so that other people can use them. This allows me to import a function to generate a uuid. 

To do this, in commnad line I navigate to the project folder and write ```npm install uuid```

This will add the dependency to my package.json. When i type ```npm install```, it looks at all the dependencies in my package.json, and downloads them in a file called ```node_modules```. 

Now that we have the dependency, we can just add this to the top of the file
```Javascript
const uuid = require('uuid');
```

Then we can use it as a function, so we can say
```Javascript
console.log(uuid());
```

## Git Ignores
We dont want to upload our node moduels to github, so we can make a file called ```.gitignore``` and inside write ```node_modules```. This means it will not upload them to github. 

We dont want to upload it since every time a user downloads the repository, they have to download all the node_modules, which takes a long time. If the user just types ```npm install`` it should generate the node_modules folder for them with all the dependencies installed. 



