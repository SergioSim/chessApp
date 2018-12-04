import React, { Component } from 'react';
import pieces from '../lpieces.png';
import spacer from '../spacer.png';
import {GameContext} from './Game'

export class Square extends Component {
  constructor(props) {
        super(props);
        this.pieceColor = {white:-3, black:-113};
        this.pieceLeft = {pawn: 25, rock:-67, knight:-158, bishop:-252, queen:-344, king:-413, void: 110};
        this.gameContext = props.gameContext;
        this.changePiece = this.changePiece.bind(this);
        this.state = {
            value: props.value,
            x: props.value % 10,
            y: (props.value - (props.value % 10)) / 10,
            piece: props.piece,
            pieceColor: props.pieceColor,
            isSelected: false,
            changePiece: this.changePiece
        };
        
        this.gameContext.piecesState[this.state.value] = this.state;
  }

  changePiece(piece){
    this.setState({piece: piece});
  }

  move(x,y){
    const hisId= y*10 +x;
    console.log(hisId);
    this.changePiece(this.gameContext.piecesState[hisId].piece);
    this.gameContext.piecesState[hisId].changePiece('void');
    this.setState({x: x});
    this.setState({y: y});
  }

  logCoords(){
    console.log(this.state.x + "|" + this.state.y );
    console.log(this.state.piece);
    console.log(this.state.pieceColor);
    console.log(this.gameContext);
    if(this.gameContext.selectedFigure.length === 0){
      //selecting
      if(this.state.piece !== "void"){
        // only if its a figure
        this.gameContext.selectedFigure = [this.state.x, this.state.y];
        this.setState({isSelected: true});
      }
    }else{
      if(this.gameContext.selectedFigure[0] === this.state.x && this.gameContext.selectedFigure[1] === this.state.y){
        //unselecting
        this.gameContext.selectedFigure = [];
        this.setState({isSelected: false});
      }else{
        this.move(this.gameContext.selectedFigure[0],this.gameContext.selectedFigure[1]);
      }
    }
    console.log(this.gameContext.selectedFigure);
  }

  changeContext(gameContext){
    if(this.gameContext !== gameContext){
      this.gameContext = gameContext; 
    }
  }

  render() {
    const divStyle = {
      background: !this.state.isSelected ? (this.state.x + this.state.y) % 2 !== 0 ? "#7d8796" : "#e8ebef" : "#5bd75b",
    };
    const spriteStyle = {
      top: this.pieceColor[this.state.pieceColor]+"%",
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