# Demos: Node, npm, Express

This will be our first "real" express server, so the focus of this build will be on express mechanics and how they fulfill the "HTTP Server" role in the WRRC.

The actual work being done by the server is secondary to it's operation (although it will properly feed the front end when complete)

## Demo 1 - Express Server (`demo/back-end/server.js`)

Now that we know what node.js is and how it can run code for us, lets do something interesting and build a server.

The biggest difference between that simple React Application and a Server Application is that the React Application can just run and be done. Server Applications have to keep on running on a machine, waiting for many people to connect to it and ask for things. **Your computer can't just run an app whenever someone wants something**

- We have to make a Server App run and never stop.
- We need to make the Server App accessible for the rest of the world.
- We have to tell it how to respond to other Client Apps asking for things.

### Build a package.json

Before we can go anywhere, we need to create a package and install the dependencies:

- Run `touch server.js` and explain that this will be our starting point for our application. Great name, right?
- Run `npm init` and answer all the questions, explaining as you go.
- Open the resulting `package.json` and go line by line through it.
- What is this file even for?
  - It tells node how to run your app the right way!
  - In fact, we need to tell it right now that we need some help
  - `npm install express dotenv cors`
  - What are those? Dependencies. Libraries that we need to help us write this app. Remember, not all code has to be yours!

### Start up server.js

Begin by bringing in some dependencies.  At this point, give them a sentence about what role they play ... saying things like:

> "We're going to require a library called 'dotenv' which is going to let us set some global variables in a safe way."
> Now, we need express, which is this amazing library that's going to handle all of those complicated tasks with HTTP, the envelope, etc for us"

server.js

```javascript
'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
```

Next, we're to create and start the server just to prove that we can. Again, walking them through some of the basic whats and whys

> "We need to 'open a port', which is literally like unlocking the door of a store and putting up a spotlight.  Here's where we are, and here's you can get in"
> "Once we have decided to do that, we create a new application out of express.  That `app` variable has quite literally all of the magic in it. Methods, variables, all sorts of greatness that we'll be getting into all week."
> "Finally, that app needs to actually start ... let's open up our store and turn on that light. Now, everyone can get to us by visiting a browser and going to port 3001 on the localhost server"

server.js

```javascript
const PORT = 3001;
const app = express();

app.listen(PORT, () => console.log(`App is listening on ${PORT}`) );
```

- Start the server by using `nodemon`
- Notice the blinking cursor. That means it's waiting for someone to come in and shop.
- Open your browser and go to <http://localhost:3001>
- You won't get anything, but you can see it trying and giving an error
  - In fact, go to the network tab and watch!

Lets definitely dig into that port ... as you can see, we're hard coding it there. That's not going to work when you deploy this to to the cloud, where a port is exposed by the cloud provider to your application in an environment variable.

> Question for the class: Why don't they allow us to specify our own port?

So, create a file called `.env` and put this line in it:

`PORT=3001`

What does that do? Magic. The `require('dotenv')` line will actually open up that file and read in that value for you. This lets us set our port here for local development, and allows us to consume the port specified by our cloud provider upon deployment.

This does require one change:

```javascript
const PORT = 3001;

becomes:

const PORT = process.env.PORT || 3001;
```

Break that line down with the students.

### Building routes

**Lets make come magic** We need to be able to respond to someone's request.

> We'll create what's called a "Route" ... when someone asks for a specific address (like <http://localhost:3001/bananas>), we need to map that to something, in our server, 1:1 so that we can fulfill that request.

Build both routes and then show in the browser that they work.

<http://localhost:3001/> (notice how the '/' matches the URL and the get?)

```javascript
app.get('/', (request,response) => {
  response.send('Home Page!');
});
```

<http://localhost:3001/bananas> (notice how the '/bananas' matches the URL and the get?)

```javascript
app.get('/bananas', (request, response) => {
  response.json({ "bananas": "are cool" });
});
```

**Unpack all of that.**

- `app.get('/route', ...)` - This is an event listener, just like jQuery and Vanilla. "When the app hears the "get" event on "/route" ... it's time to do some work.
- `, (request, response) => {}` - this is a "callback", which is a fancy way of saying "the code that has to run when that route is requested. The code in the `{}` is what ultimately gets executed.
- `request` - an express "request" object. It has information about the user (all of that stuff in the network tab under request headers, and even extra data that you might have put inside or outside the request envelope). This has it all.
  - We will use this to inspect what the user asked us for.
- `response` - and express "response" object. This has the methods (like `send()` that let us present our data, html, whatever ... back to the browser. We generally use 3 of those methods:
  - `.status()` - an http status code (numeric) to tell the browser the state of the request, use these for reference:
    - <https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>
    - <https://httpstatusdogs.com/>
  - `.send()` - send text or html to the browser
  - `.json()` - specifically send JSON data to the browser
- Now, go back and code review those 2 routes and be ready for questions

### Let's make another route that uses a Query String

First, let's get some external data. Later, we'll use a database, but for now, let's show the students that you can "require" a JSON file and use that data directly in our server!

```javascript
const shoppingList = require('./shopping-list.json');
```

Now, let's build a route that reads the query string from the request and then uses that to return a certain part of the data.

Note that the `request` object in express is going to automatically have the query string parsed out into an object. Show the students this mapping:

Given this URL: `http://localhost:3001?name=Fred&age=100&hair=grey&occupation=retired`

Express turns the key/value pairs after the `?` and creates this object:

```javascript
// request.query --
{
  name: "Fred",
  age: 100,
  hair: "grey",
  occupation: "retired"
}
```

Using that object, we can do intelligent things in the server to give the client a more custom response based on what they want. Here, this route is not just saying "give me the shopping list", but rather "give me the part of the shopping list I'm asking for"

```javascript
/** server.js
 * ...
 * ...
 * */
function getItems(type) {
 // find items to send back to client
}
/**
 * ...
 * */
app.get('/shoppingList', (request, response) => {
  const type = request.query.type || "food";
  console.log('Query Params', request.query);
  console.log('Type:', type);
  let shoppingList = getItems(type);
  response.status(200).send(shoppingList);
});
```

**NOTE**: students will build something similar in labs but not this exact thing, demonstrate that data lives in another place and what is returned to the client is specific to the applications needs, not specific to what is stored in the data layer.

### Handling Errors

#### 404 / Not Found

Express tries to figure out routes in the order that you created them, and the first match is what goes to the browser. But what if you don't have the answer?<http://localhost:3001/amazing-stuff>ff

server.js

```javascript
app.use('*', (request,response) => {
  response.status(404).send('huh?');
});
```

Here, app.use() helps us out, if you put this after your other routes.  Notice that `'*'` ... that means match anything. So, if none of your routes are called 'amazing-stuff`, this router will automatically run, and throw up a 404 error.  Remember, it's got to be after all of your routes it will be the only thing that works.

Show the students what happens when you make that the first route, and then try and go to a good route.

#### Actual Errors

What happens if your code actually breaks?

Throw the error, and express error handler (4 params) will pick it up!

```javascript

app.get('/throw-an-error', (request, response) => {
  // When something bad happens, you can "throw" an error and the
  // error handler middleware will catch and handle it
  throw 'You did something really, really bad!';
});

// Handle errors. Notice the 4 params to the handler?
app.get( (error, req, res, next) => {
  response.status(500).send(error.message);

});
```

(This might be a good time for a break...)

## Demo 2 - Front End Application (`demo/front-end/app.js`)

We're going to build a simple app in React that pulls data from the server. You'll notice that the demo has 5 buttons and 4 methods each showing different ways to do the exact same thing.

It's important to build those all out progressively. If your time is short, or you are having a lot of questions and review time it's fine to not get to all of the extra buttons and methods. The core principles are there in the first 2 buttons and requests.

Getting to DRY Methods, or Browser Query Strings is great, but it could add confusion to your more junior level students. Do not force this. In fact, these are great topics to save for Code Review in the next class.

### Basic Build

- Begin by building a brand new React application (they can't see this enough!)
- Create an empty state variable called `list` and initialize it to an empty array
- Create a `<ul></ul>` and map over that list to show the shopping list
  - Of course, it'll be empty to start
- Create a button that, when clicked, will go to the server and ask for the shopping list by doing an `axios.get()` of the `/shoppingList` route.
  - Note that the server will default to part of the list database if we don't use a query string

At this point, we have a client that's asking the server for data and showing that data.

**REST, Celebrate, Review!! ... this concept alone is going to be a mind blower.**

### Refactor and stack our knowledge

- Alter the button's text to say "Get Supplies".
- In the method that goes to the server, refactor it to add `?list=supplies` to it.
  - What happens?
  - Why is the list different than it was before?
  - How does `list=supplies` get seen and processed on the server?
- Once you have that part well understood, add a second button, just for getting food

**You've now used Query Strings to ask the server for something specific!**

### Keep Going

- Create another button that, when clicked, will look at the browser's query string and send **THAT** to the server
- Create even more buttons that use a refactored method to DRY up the first 2
  - But keep those first 2 there, as a reference
