import React, { Component } from 'react';

export class Square extends Component {
  constructor(props) {
        super(props);
        this.state = {
            sqSize: props.size / 8 - 3
        };
    }

    render() {
      const divStyle = {
        height: this.state.sqSize,
        width: this.state.sqSize,
        background: this.props.value % 2 == 0 ? "#7d8796" : "#e8ebef" 
    };
      return (
        <div className="square" style={divStyle}>
          {this.props.value}
        </div>
      );
    }
  }