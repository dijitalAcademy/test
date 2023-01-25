# Lecture Notes: Browser Router and Conditional Rendering

## Warm-Up

- **Student Analysis** (5 min)
  - Show or print the [warmup code](../warm-up/warm-up.md).
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md).
  - Optionally demo the running code at Repl.it.

## Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

## Code Review

- Be sure you are giving students lots of opportunity to talk about code during code reivew. One of the best ways to do this is to go line by line around the room asking students what is happening. This helps students get more comfortable speaking about code.

## City Explorer Build

- **Why** (5 min)
  - This simple app is a great opportunity to revisit React and dynamic data to cap off the week.
  - We provide them a more complex version of this same app during the next lesson block. This provides the students some context on that application when they see it again.
- **What** (5 min)
  - City Explorer accepts a city name, draws a map, and then lists out some interesting data about the city, pulled from a remote data source (client + server!).
  - Draw/Demonstrate the actual running City Explorer App.
- **How** (30 min)
  - Begin with a drawing and discussion of the WRRC.
  - Then, map out on the whiteboard what you wnat the app to do.
  - Using a live-coded demo ...
    - Build the React scaffolding of City Explorer, pulling in some sample data and rendering to the page.
  - Use conditional logic to wait to display to the results until after the user has entered a city.
- **Experimentation and Discovery Ideas**
  - Get some suggestions from the students as how this app can be better.
    - Multiple Cities?
    - Movies, Nights Out, Trails, etc?
    - What else can they think of?

## Browser Router

- **Documentation**
  - [`react-router-dom` v6 Docs](https://reactrouter.com/docs/en/v6/getting-started/overview)
  - [`react-router-dom` v5 Docs](https://v5.reactrouter.com/web/guides/primary-components)
    - these are the docs for v5 which is not compatible with React v18.
    - The v5 docs are helpful in breaking down some of the common components, their jobs and how to implement them.
  - source of all `react-router-dom` truth: <https://github.com/remix-run/react-router>
- **Why** (5 min)
  - Routing (switching between pages) is a common feature of every application and website.
  - It is implemented using component composition.
    - But don't talk about that just yet...
- **What** (10 min)
  - What is Routing?
    - A link that switches content.
    - When clicked, a link will render a component in a spot on the page.
    - Can change out a single component within a page.
    - Or, it can can switch out a full page of content.
- **How** (30 min)
  - Open up the source code on GitHub for the provided Portfolio Template for lab-05 and have students break down what is happening in the index.
  - This site has 2 pages, all of which are rendered dynamically in the browser (not server rendered).
  - Although the page does not ever refresh, notice how React Router keeps the URL up to date as you navigate through the site. This preserves the browser history, making sure things like the back button and bookmarks work properly.
  - Talk about `<BrowserRouter>` and what it is doing.
    - At the core of every React Router application should be a router component. For web projects, react-router-dom provides `<BrowserRouter>` and `<HashRouter>` routers. The main difference between the two is the way they store the URL and communicate with your web server.
      - A `<BrowserRouter>` uses regular URL paths. These are generally the best-looking URLs, but they require your server to be configured correctly. Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router. Create React App supports this out of the box in development, and comes with instructions on how to configure your production server as well.
      - Ask how they might use the `<BrowserRouter>` in their applications.

      ```js
      import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
      ```

  - Talk about `<Router>` and what it is doing.
    - To use a `<Router>`, just make sure it is rendered at the root of your element hierarchy. Typically you’ll wrap your top-level `<App>` element in a router.
    - In terms of React, `<Router>` is a [context provider](https://reactjs.org/docs/context.html#contextprovider) that supplies routing information to the rest of the app. That just means that it rerenders the React app when something within the `<Router>` changes.

  - Talk about `<Routes>` and what it is doing.
    - Routes replaced the Switch in v5
    - V6 is a lot smarter and will pick the Route with the most specific match so you don't have to worry about ordering inside the Switch anymore.
    - Routes is a parent element to hold all the app's nested `<Route/>` components.

  - Talk about `<Route>` and what it is doing.
    - A Route's job is to render some Component when its path matches the current URL.
    - You can think of a `<Route>` component as a "page" in your app.
    - If the current URL endpoint is `/bananas`, this route is rendered while the rest are ignored.

    ```js
    <Router>
      <Header />
      <Routes>
        <Route
          path="/bananas"
          element={<Bananas />}
        >
      <Routes>
      <Footer />
    </Router>
    ```

  - Find the `<Link>` tags to demonstrate how they are used later in the code to navigate between pages.
  - Demonstrate how to make a change to the page and use your developer tools to find a specific component.
- **Experimentation and Discovery Ideas**
  - What is happening in the url when we change pages?
  - What do we see in the Chrome Network Inspector panel when we click links? How does that compare to a standard web page?
