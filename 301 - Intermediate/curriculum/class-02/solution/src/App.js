// LAB01 - FEATURE TASKs
// Your App component should render a Header, Footer and Main component, each of which is defined in their own files.

import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

class App extends React.Component {
  render() {
    return (
      <Container fluid className="App">
        <Header />
        <Main />
        <Footer />
      </Container>
    );
  }
}

export default App;
