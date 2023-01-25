// LAB 01 - FEATURE TASKS
// Your Header component needs to have an <h1> with a title.

// LAB 02 - STRETCH GOAL
// When the user clicks on elements such as the header, footer or title of page, make something change using state.
// You can update the words, change the styles or add something new. Be creative.

import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSwitch: true,
    };
  }

  changeColor = () => {
    if (this.state.colorSwitch) {
      this.setState({colorSwitch: false});
    } else {
      this.setState({colorSwitch: true});
    }
  }

  render() {
    return (
      <div onClick={this.changeColor}>
        {this.state.colorSwitch ? 
          <h1 className="purpleHeader">🤘 Gallery of Horns 🤘</h1>
          : 
          <h1 className="blueHeader">🤘 Horned Beasts 🤘</h1>
        }
      </div>
    );
  }
}

export default Header;
