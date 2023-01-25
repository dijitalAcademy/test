# Lecture Notes: In Memory Persistence

## Lecture Example

### Warm-Up

- **Student Analysis** (5 min)
  - Show or print the [warm-up code](../warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it

### Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

### Code Review

- This is a great chance to break students into small groups and have them take turns discussing how they refactored their code and help each other fix broken code.

### In Memory Persistence

- **Why** (5 min)
  - To reduce the number of hits on an API
  - Global Cashing
  - Increases the performance of everything (expect for memory)

- **What**
  - In memory persistence is simply an object that is going to hold the results from our API call so that we don't have to hit the API every time a uers asks for the same city. The second time a user asks for a city (or the thrid etc...), we will simply return the results that we have in our cache rather than make another API call.

- **How** (60 min)
  - Build out the demo with the students, but start with a detailed drawing of the WRRC. Be sure to include the in memory database in your drawing.
    - Lead the class through a series of questions:
      - Where should we put the information from the API once we get it and run it through the constructor function?
      - When do we need to hit the API vs go to the DB to get information?
      - How long should we keep the data in the in memory database?
      - What can we do to keep track of how old the data is?
    - The WRRC drawing will be crucial for understanding. Draw out multiple versions. What happens the first time a user visits the site? What about the second time the same request is made?
  - Once they understand the big picture, you can begin the coding demo. Students might be confused about what the in memory database is. Make sure you emphasise that we are simply storing information in a global object.
  - Focus on the limitations of this method of persistence. How annoying is it that every time we restart the server, all the of the data in our cache is cleared?

- **Experimentation and Discovery Ideas**
  - How long might you want to keep data cached?
  - How could you keep track of how long data is cached?
  - Would could you do if data is too old?

## Debugging

- Debugging steps to take when you get stuck
  - `console.log` your variables
  - use `typeof` to check the data type of a variable
  - check for misspelled variable/function names
  - look for mismatched brackets/parens
  - mixed use of single and double quotes
  - look for function calls that are passing in arguments in the wrong order
  - double check array indexing when trying to grab a specific value
  - use caution when reinitializing variables inside a loop
  - Prevent infinite loops with a valid condition that will eventually return false
  - <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#debugging>

- Last line in `server.js` to catch any endpoint that is not defined in the server.

```js
app.use('*', notFoundHandler);

function notFoundHandler(request, response) {
  response.status(404).send('Error! Someone call the developer!');
}
```

- List 5 different debugging tools:
  - The easiest and maybe the most common way its to simply `console.log()` the variables you want to check
  - You can use `typeof` to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types.
  - Setting breakpoints in the debugger window will allow you to examine values
    - What is a breakpoint?
      - You set breakpoints wherever you want to pause debugger execution. For example, you may want to see the value of certain variables or look at the call stack at a specific breakpoint.
      - <https://docs.microsoft.com/en-us/visualstudio/debugger/using-breakpoints?view=vs-2022>
    - [VS Code Debugger tool](https://code.visualstudio.com/docs/editor/debugging)
    - The `debugger;` keyword stops the execution of JavaScript, and calls (if available) the debugging function. This has the same function as setting a breakpoint in the debugger. If no debugging is available, the debugger statement has no effect.
  - eslint
  - catch missing brackets or parens with the VS Code Rainbow Brackets extension.
  - React extension in Chrome: <https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en>
  - Live Share VS Code Extension for collab <https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack>
