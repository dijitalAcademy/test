# Demo

## Overall Guide

- Start this demo by creating a git repo and cloning it to your machine.
- After each piece of the demo, make a commit with a descriptive message.

## Data Types

There are three main data types in javascript:

1. string
   - Example: 'this is a string'
1. number
   - Example: 4, 8, 15
1. boolean
   - Example: true, false

we can determine what the data type of a specific value by using the `typeof` operator.

Source: [MDN - typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

## Conditionals

There are 2 different types of conditionals:

1. if/if....else statements
1. switch statements

With the addition of conditionals and the student's prior knowledge of for loops, we can discuss scope. Give examples of the difference between variables declared inside a code block with the `var` keyword and with the `let` keyword. The highlight should be that if we want to use the value of a variable later on in our code, we should declare it in the global scope.

```js
if(true){
  var username = 'Robin';
}
console.log('username :', username);

if(true){
  let favoriteColor = 'orange';
}
console.log('favoriteColor :', favoriteColor);
```

### If Statements

If statement conditionals are a part of the prework, so you shouldn't need go over these too much into depth.

The whole point of an if statement is to determine "IF" a condition is met.

example:

```js
let name = 'Jane Smith';
if(name === "string"){
    console.log('this is a string');
}
```

## Demo Instructions

(refer to the app.js file in the demo folder):

1. Discuss with the students about the "seperation of concerns" concept. Create a new `app.js` file and save it externally from the `index.html` file.
1. Add the `<script>` tag with the new `app.js` file in your html file right before the `</body>`.
1. Write code to `Prompt()` or `Confirm()` the user to get input. Take the response and write out a conditional statement that gets evaluated. Follow the app.js file as a guideline for code.
1. Show the students the difference between the && (and) operator and the || (or) operator.

## Switch Statements

Switch statements are similar to if conditionals, except they evalute the value against different 'cases'. Here is an example:

```js
let expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}
```

Source: [MDN switch statements](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/switch)

## Demo Instructions

1. Add onto your current code by asking the user a question.
1. Evaluate the response using a switch statement.

## Arrays

**Note that this portion of lecture is a preview of topics that won't be necessary for today's lab. If you are running short on time, skip the discussion of arrays.**

This demo works best in [repl.it](https://repl.it/). This is a great location that we can just demonstrate and showcase javascript code without having to create a whole new project. They will not be using Arrays in their lab today, so keeping this separate from the demo code is a good idea. *You are still able to share the result of your repl.it with the class at the end.*

Arrays are brand new concepts for the students. Arrays are ways that we can group together data in one location. An array, at it's core, is an accumulation of data, similar to a list, that can be used to hold information for later use.

There are many different ways that we can create arrays in javascript.

```javascript
// Create an empty array
let emptyArray = [];

// Create an array full of "quiz answers' by putting the values directly into a new array
let quizAnswers = ['b', 'd', 'a', 'a', 'c'];

// we can even create an array of arrays!
let nestedArray = [ ['yes', 'y'], ['no', 'n'], ['no', 'n'] ];
// this is exactly the same as the nestedArray above, except just formatted slightly different.
let multiLineArray = [
                      ['yes', 'y'],
                      ['no', 'n'],
                      ['no', 'n']
                    ];

// we don't always have to commit to one data type in an array. here is an example of a mixed data type array.
let mixedArray = ['Harry', 'Potter', 10, true, 'luxurious'];
```

Arrays are what we call ***index-based***. This means that every item in the array is at a specific index/location of that array. Array indexes start at 0 and increment by one for every position they are from the beginning.

For example, in the array `[4,8,15,16,23,42]`:

- The value of 4 is at index of 0.
- The value of 8 is at index of 1
- The value of 42 is at the index of 5.

This array is a *length* of 6, and has an index range of 0-5.

If we wanted to change the value of a specific index in the array, we can "target" it by specifying the index in the array directly.

Here is an example:

```js
let myArray = ['a' 'b', 'c'];
myArray[0] = 'z'; // myArray is now equal to ['z' 'b', 'c']
```

We can easily check if a specific index in the array is equal to specific value

```js
let myArray = ['a' 'b', 'c'];
if(myArray[1] === 'b')
{
    // do something here
}
```

If we wanted to "add" an item to the end of the array, we can do so by the `.push()` method.

```js
let myArray = [1,2,3,4,5];
myArray.push(6);
// myArray now is equal to [1,2,3,4,5,6]
```

To remove an item from the end of an array, is a `.pop()`.

```js
let myArray = [1,2,3,4,5];
myArray.pop();
// myArray is now equal to [1,2,3,4]
```

Feel free to discuss `shift()` and `unshift()` if you have time. Not required, but may be worth talking about if you feel the class is ready for this.

## Git vs GitHub

Here are things you should highlight as you talk about the differences between git and GitHub:

- git is what we have on our local machine to track changes to our projects through a series of commits and branches.
- GitHub is "the cloud" that stores our code so that we can share/collaborate amoungst teams.
- We use git on our local machine to send changes up to GitHub.

### GitHub Walkthrough

Walk the students through how to create a new GH repo and clone it down to their `~/codefellows/201/` directory on their local machine.

While on `main`, have them all setup their `app.js`, `index.html`, and `style.css` with all the necessary boilerplate code to get them working together. Then `A-C-P` as a group to `main`.

Be sure to show them the [lab setup instructions](../project-setup.md) document to assist them in future GitHub repo creations.
