import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    if(this.props.opacity >= 0.2) {
      var returnStatement = <ColorBox opacity={this.props.opacity - 0.1} />
    } else {
      var returnStatement = null
    }
   
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {returnStatement}
      </div>

    )

}

    
  // import React, { Component } from 'react';

  // export default class ColorBox extends Component {
    
  //   render() {
  //     return (
  //       <div className="color-box" style={{opacity: this.props.opacity}}>
  //         {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
  //       </div>
  //     )
  //   }

}