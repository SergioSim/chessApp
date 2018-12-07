import React, { Component } from 'react';
import pieces from '../lpieces.png';
import spacer from '../spacer.png';
import {GameContext} from './Game'

export class Square extends Component {

  static pieceColor = {white:-1, black:-110};
  static pieceLeft = {pawn: 25, rock:-64, knight:-150, bishop:-236, queen:-324, king:-413, void: 110};

  constructor(props) {
        super(props);
        this.changePiece = this.changePiece.bind(this);
        this.gameContext = props.gameContext;
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
    this.setState(piece, ()=>{
      this.gameContext.piecesState[this.state.value] = this.state});
  }

  move(x,y){
    const aValue = 10 * y + x;
    const aPiece = this.gameContext.piecesState[aValue];
    this.setState({
      piece:aPiece.piece, 
      pieceColor: aPiece.pieceColor, 
      isSelected:false
    }, () => {this.gameContext.piecesState[this.state.value] = this.state});
    this.gameContext.piecesState[aValue].changePiece({
      isSelected: false,
      piece: "void"
    });
  }

  logCoords(){
    console.log(this.state.x + "|" + this.state.y );
    console.log(this.state);
    //console.log(this.gameContext);
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
        this.gameContext.selectedFigure = [];
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
      top: Square.pieceColor[this.state.pieceColor]+"%",
      left: Square.pieceLeft[this.state.piece]+"%"
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