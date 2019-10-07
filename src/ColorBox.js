import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    let currentOpacity;

    if (this.props.opacity >= 0.2) {
      currentOpacity = <ColorBox opacity={this.props.opacity - 0.1} />
    } else {
      currentOpacity = null;
    }

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {currentOpacity}
      </div>
    )
  }
}
