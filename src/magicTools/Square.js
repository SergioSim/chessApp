import React, { Component } from 'react';

export class Square extends Component {
  constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }

    render() {
      const divStyle = {
        background: this.state.value % 2 === 0 ? "#7d8796" : "#e8ebef" 
    };
      return (
        <div className="square" style={divStyle}>
          {this.state.value}
        </div>
      );
    }
  }