import React, { Component } from 'react';

export class Square extends Component {
    render() {
      return (
        <div className="square">
          {this.props.value}
        </div>
      );
    }
  }