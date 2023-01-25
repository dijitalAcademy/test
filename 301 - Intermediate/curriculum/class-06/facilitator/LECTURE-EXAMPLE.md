# Lecture Example: APIs and Asynchronous Code

## Warm-Up

- **Student Analysis** (5 min)
  - Show or print the [warm-up code](../warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it

## Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

## The WRRC

- **Why** (5 min)

  - This is the probably the first time that most students will write code that collects information from someone else's code. This concept can be overwhelming when first introduced. Prepare to spend a lot of time answering questions to help students make these connections.

- **What** (10 min)

  - The WRRC is how the internet works. Everyday we will build on our model and expand it as we introduce new concepts, but understanding this first request and response is crucial to understanding the whole.

- **How** (30 min)

  - Use a whiteboard of your choice and draw a WRRC. Label the client and third-party API that we will visit today during our demo/lab. Connect the two with a request and a response.

- **Experimentation and Discovery Ideas**

  - What are some good analogies we can use to describe the WRRC?
    - a server in a diner: client is the customer - chef is the API - server is the request and response (this is a good one because we can use it when it gets more complex later)

## HTTP Methods

- Developers use HTTP methods to access APIs.
- GET: requests data from a server
- POST: sends new information to a server
- PUT: makes changes to existing data on a server
- DELETE: removes existing information from a server
- PATCH: used for partial updates
- There are more methods than these 5, but these are the most popular

## Asynchronous Code

- You don't know how long the API will take to respond, so when the script runs the next line it will throw an error because the response is not yet available.
- Instead, you need your code to wait until the response is returned before it tries to do anything else to it.
- Many Web API features now use asynchronous code to run, especially those that access or fetch some kind of resource from an external device, such as fetching a file from the network, accessing a database and returning data from it, accessing a video stream from a web cam, or broadcasting the display to a VR headset.
- What is synchronous code?
  - The script runs some code, the lines are executed one after the other and the result is returned as soon as the browser can do so
  - While each operation is being processed, nothing else can happen — rendering is paused.
  - This is because JavaScript is single threaded.
  - Only one thing can happen at a time, on a single main thread, and everything else is blocked until an operation completes.
- async and await
  - "async and await make promises easier to write"
  - async makes a function return a Promise
  - await makes a function wait for a Promise
  - <https://www.w3schools.com/js/js_async.asp>

## APIs

- **Why** (5 min)
  - Some applications need more information than they have immediate access to
- **What** (10 min)
  - Application Programming Interface
  - It allows two applications to communicate with one another to access data.
  - An API is essentially a messenger that takes requests, translates, and returns responses.
  - The internet is full of third-party APIs who will happily give us their information as long as we ask for it in the correct way and follow their rules (ie - some require special keys, some require that we provide a link back to them... etc...). How do we know what their rules are? We have to read their documentation and every one of them is different!
  - Collecting information from these APIs is not instantaneous. We have to wait to get to get the data back. This is why we `async` and `await`: to tell JavaScript to wait for the data to come back.
  - What is an API key and why do you need it?
    - An API key is a unique identifier used to authenticate a user, developer, or calling program to an API
    - It is used to track number of requests made by a particular app to avoid Denial of Service attack and also for premium features. eg: only 500 calls per day for free account and to make more calls you have to subscribe to their premium account.
    - API Key is included in headers or URL of the request

- **How** (30-40 min)
  - Begin by going to an API of your choice. [Pokemon](https://pokeapi.co/) is a good one that is easy for students to understand. Show them how we can hit the API and get data back.
  - As an example, take them to the [Thunder Client](https://www.thunderclient.io/) website and encourage them to download the app. Demonstrate how we can hit that same API using Thunder Client to get the same data.
  - Once you have answered all of their questions, open up Location IQ and read through the docs with the students. Notice that you will need a key. Talk about what a referrer key is and put `http://localhost:3000/` as an approved URL so that your referrer key will work with your localhost.
    - why do we need to do this?
    - what would happen if Location IQ made their data public to anyone without a key?
    - where should we store this key?
      - the .env file! Students make a lot of mistakes when it comes to the .env file so spend some time here. The syntax is different than JavaScript and this will cause some strange errors in their code.
  - Be sure to talk about what a query is. Where it is located and how we can construct a url using the key and queries to hit the Location IQ API
    - Practice hitting the API in your HTTP API Client with different cities
  - Go through the [DEMO](../demo)

- **Experimentation and Discovery Ideas**
  - Start off simple - APIs like pokemon are easy for students to wrap their heads around and they don't require keys then move onto Location IQ.

## New Tools

- What is Thunderclient?
  - Resource: <https://www.thunderclient.io/>
  - According to their docs: Hand-crafted lightweight HTTP Client for Testing APIs

- What is Axios?
  - Resource: <https://axios-http.com/docs/intro>
  - This is our "carrier pigeon" that carries our request to the server/API.
  - According to their docs: Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
  - Features: Make XMLHttpRequests from the browser; Make http requests from node.js; Supports the Promise API; Intercept request and response; Transform request and response data; Cancel requests; Automatic transforms for JSON data; Client side support for protecting against XSRF

## Deploying to Netlify

- Add your deployed Netlify app url as an HTTP Referrer to your API token settings. This step is necessary to prevent any unauthorized use of your token. Also add `localhost` while testing from your development environment.
  - Make sure you add `http://localhost:3000/` as a referrer. The slash at the end is super important or it won't work.
  - If your React app is running on a different port, you will need to add that port as well.
- Add your API key to your Netlify deployment. Under "Site settings" > "Build & deploy" > "Environment", you need to add "Edit variables" to add your API key, giving it the same name you used in your local .env file.
  - Remember, "env" is just short for "enviroment". These are your enviroment variables.
- If you haven't already gotten all your API keys for City Explorer, check out the reading for class-07.
  - You will need a WeatherBit API key for lab 08!
