import React from "react";
import "./App.css";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* LAB01: Your App component should render a Header, Footer and Main component, each of which is defined in their own files. */}
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
