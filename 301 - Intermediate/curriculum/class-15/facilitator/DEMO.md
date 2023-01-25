# Auth0 Demo Instructions

This demonstration is presented as a tutorial to show students how to convert their current Can-of-Books application, using a placeholder login system with routes receiving the users email on the request query, to one that uses Auth0 to authenticate the user and respond accordingly.

If you do not have a demo server or client prepared use the solution from class 13 as your starting point for this demo build.

The demo-solution code also holds a simplified version of the Can-of-Books client application which has been built using the Auth0 [react documentation](https://manage.auth0.com/dashboard/us/dev-557yq6wx/applications/Y13Irtd5W8e90GtWAQENeuoCikLKxFhC/quickstart). This application makes a get request using the bearer token in the header so that the students can see and example of how to send the token to the server for verification.

There are notes in the auth.js file with links to where some of the functions came from so you can show the students exactly where you got the code.

The biggest challenge in this demo is to pull back the curtain on this code and show them that all of it comes from the library documentation for Auth0 and jsonwebtoken so that they understand that you, and they, don't have to write it yourself.

Here are some tips and notes on these 2 services and how you should build out the demo. You will be moving back and forth between these 2 applications

## Server: demo/server

1. Using the starter code, configure an express sever, connected to a MongoDB Database.
1. Begin with a single route which does a "GET" of `/books`.
   - This route should do a simple query from the MongoDB database, showing all books.
1. Pair this route with the React app (Step 1 below) to show a list of books from the database on the app.
1. Once you have the React app configured to work with Auth0 and have it working, start the process of adding authorization to this server.

Adding authorization to the server

1. Add your Auth0 client id and url to the `.env` file.
1. Create custom middleware to handle the Authentication process.
   - This is a new concept for the students!
   - They have used middleware (cors, etc) already. Here, we're just going to make one of our own.
1. Once the middleware is created, `use()` it in the server.
   - Prove that requests to `/books` no longer work without a valid token.
1. Change the react application to start sending the token on the requests

## React App: demo/client

1. Begin by building out a simple React app that does a get request to the server's `/books` endpoint.
1. Once you're connected and receiving books, let's work on protecting that display to only be seen by users that are logged in.
1. Configure your Auth0 account, create your `.env` file and add the `<Auth0Provider>` component to your app in the `index.js`.
1. Note that this will provide some `props` to all of your components that you can use to determine a users login status.
1. Use this in your `<Content>` component to conditionally load that books list. At this point, no books should show (you're not logged in).
1. You can also change the `App.js` to conditionally render that `<Content>` component ... only if you're logged in.
1. Create the Auth Components: `<AuthButtons>`, `<Login>`, and `<Logout>` so that we can get a user logged in
   - The `<AuthButtons>` component does both jobs. Essentially, it checks to see if you're logged in or not and then draws either a login or logout button.
   - The `<Login>` and `<Logout>` components each stand alone and draw the appropriate button.
   - You can use any combination of these to create the "login experience" for your users.
1. Now that you can properly show your login/logout buttons based on login status, and with that, the content as well, it's time to finish the back end server and make sure that only logged in users can fetch books from the database.
1. To authenticate server requests, you'll simply need to alter the `axios` call in the `<Content>` component to send the Bearer header.
