# Week_03

## Writting Hello World in Javascript

The next step is actually writting the code. In this folder, create a file called "index.js" and add the line below, which prints out "Hello World!"

```Javascript
console.log("Hello World!")
```

## How do I run it?

From your command line, navigate to where ever the folder is saved and run "node index.js", which runs the program. It should print "Hello World!" in your command line.

## Custom commands

As your program gets more complex though, the line you have to type to run your code can get really long or you may have many commands to do different things. 

To solve this problem, we can add aliases for certain commands. In this case, I want to be able to write ``npm run start`` in my command line, and have it know how to start my application. 

We can alias these commands inside our packge.json file my adding the lines below
```JSON
"scripts" : {
    "start": "node index.js"
}
```
They key in this case is the command "start", and the value is the command that actually gets executed. You can run any of the scripts by running ```npm run <script name>```

