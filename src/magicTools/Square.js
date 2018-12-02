import React, { Component } from 'react';
import pieces from '../lpieces.png';
import spacer from '../spacer.png';

export class Square extends Component {
  constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            x: props.value % 10,
            y: (props.value - (props.value % 10)) / 10
        };
    }

    logCoords(){
      console.log(this.state.x + "|" + this.state.y );
    }

    render() {
      const divStyle = {
        background: (this.state.x + this.state.y) % 2 === 0 ? "#7d8796" : "#e8ebef",
      };
      const divInDivStyle = {
        background: "url(" + pieces + ") 0 0",
        width:28, 
        height: 54,
        "max-width": ""
      }
      return (
        <div className="square" style={divStyle} onClick={() => this.logCoords()}>
          <a className="stretchy no-limit">
            <img className="spacer" alt="icon" src={spacer}/>
            <img className="sprite s2" alt="" src={pieces}/>
          </a>
        </div>
      );
    }
  }