// LAB 11 - FEATURED TASKS
// Use React Router to add ability for user to navigate between Home and About "pages".

import React from 'react';
import "./App.css";
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <BestBooks />
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route path="/about" >
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
