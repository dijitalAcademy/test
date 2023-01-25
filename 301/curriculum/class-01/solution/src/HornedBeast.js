// LAB 01 - FEATURE TASKS
// The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          style={{width: '20%'}}
        />
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;
