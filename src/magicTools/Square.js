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
        this.pieceColor = {white:-3, black:-113};
        this.pieceLeft = {pawn: 25, rock:-67, knight:-158, bishop:-252, queen:-344, king:-436};
    }

    logCoords(){
      console.log(this.state.x + "|" + this.state.y );
    }

    render() {
      const divStyle = {
        background: (this.state.x + this.state.y) % 2 !== 0 ? "#7d8796" : "#e8ebef",
      };
      const spriteStyle = {
        top: this.pieceColor.black+"%",
        left: this.pieceLeft.pawn+"%"
      }
      return (
        <div className="square" style={divStyle} onClick={() => this.logCoords()}>
          <div className="stretchy no-limit">
            <img className="spacer" alt="icon" src={spacer}/>
            <img className="sprite s2" alt="" src={pieces} style={spriteStyle}/>
          </div>
        </div>
      );
    }
  }