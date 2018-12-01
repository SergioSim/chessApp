import React, { Component } from 'react';

export class Square extends Component {
  constructor(props) {
        super(props);
        this.state = {
            sqSize: props.size,
            sqValue: props.value
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      console.log(nextProps);
      return { size: nextProps.size};
      }

    componentDidUpdate(prevProps, prevState) {
      console.log("prev Props then state");
      this.setState({size: 10});
    }

    render() {
      const divStyle = {
        height: this.state.sqSize / 8 - 3,
        width: this.state.sqSize / 8 - 3,
        background: this.state.sqValue % 2 === 0 ? "#7d8796" : "#e8ebef" 
      };
      return (
        <div ref={this.myRef} className="square" style={divStyle}>
          {this.state.sqValue}
        </div>
      );
    }
  }