import React, { Component } from 'react';
import pieces from '../lpieces.png';
import spacer from '../spacer.png';
import {GameContext} from './Game'

export class Square extends Component {
  constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            x: props.value % 10,
            y: (props.value - (props.value % 10)) / 10,
            piece: props.piece
        };
        this.pieceColor = {white:-3, black:-113};
        this.pieceLeft = {pawn: 25, rock:-67, knight:-158, bishop:-252, queen:-344, king:-413, void: 110};
        this.gameContext = props.gameContext
  }

  logCoords(){
    console.log(this.state.x + "|" + this.state.y );
    console.log(this.state.piece);
    console.log(this.gameContext);
  }

  changeContext(gameContext){
    if(this.gameContext !== gameContext){
      this.gameContext = gameContext; 
    }
  }

  render() {
    const divStyle = {
      background: (this.state.x + this.state.y) % 2 !== 0 ? "#7d8796" : "#e8ebef",
    };
    const spriteStyle = {
      top: this.pieceColor.black+"%",
      left: this.pieceLeft[this.state.piece]+"%"
    }
    return (
      <GameContext.Consumer>{(gameContext) => {
        this.changeContext(gameContext);
        return(
          <div className="square" style={divStyle} onClick={() => this.logCoords()}>
          <div className="stretchy no-limit">
            <img className="spacer" alt="icon" src={spacer}/>
            <img className="sprite s2" alt="" src={pieces} style={spriteStyle}/>
          </div>
          </div>
        )}}
      </GameContext.Consumer>
    );
  }
}