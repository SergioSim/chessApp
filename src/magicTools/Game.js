import React, { Component } from 'react';
import {Board} from './Board';
import './css/Game.css';

//npm i --save socket.io

export const GameContext = React.createContext();

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
        width: 0,
        height: 0,
        playerColor: "Black",
        playerMove: "white",
        selectedFigure: [],
        piecesState: []
    };
    this.socket = new WebSocket('ws://192.168.0.159:8082');
  }

  updateDimentions(){
    this.setState({width: window.innerWidth, height: window.innerHeight});
    console.log("updating dimensions...");
  }

  componentDidMount(){
    this.updateDimentions();
    window.addEventListener("resize", this.updateDimentions.bind(this));
    this.socket.onopen = function () { this.socket.send('Ping');}.bind(this);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimentions.bind(this));
  }

  changePlayerColor(){
    this.setState({playerColor: this.getOpponentPlayerColor()},console.log(this.state.playerColor));
  }

  getOpponentPlayerColor(){
    return this.state.playerColor === 'Black' ? 'White' : 'Black';
  }

  render() {
    const size = Math.min(this.state.width, this.state.height);
    const divStyle = {
      width: size,
      height:size
      };
    const infoSize = this.state.width - size;
    const infoStyle = {};
    const fakeFloat = {float: "left"};
    if(infoSize > 300 ){
      infoStyle.float = "left";
      fakeFloat.width = 0;
      infoStyle.width = infoSize/2-30;
    }else{
      fakeFloat.margin = infoSize/4;
    }
    return (
        <div className="game-with-info">
        <div className="game-info" style={infoStyle}>
          <div>
            <h3>Welcome</h3></div>
            <h6>This is My chess AI in developpement ...</h6>
            <h6>Why not calling it My Chess AI -></h6>
            <h2>MyChAI</h2>
            <div className="menu">
                <button onClick={() => this.changePlayerColor()}>Change to {this.getOpponentPlayerColor()}</button>
            </div>
          </div>
        <div className="fake-info" style={fakeFloat}></div>
          <div className="game">
            <div className="game-board" style={divStyle}>
              <GameContext.Provider value={{
                playerColor: this.state.playerColor, 
                selectedFigure: this.state.selectedFigure,
                piecesState: this.state.piecesState,
                playerMove: this.state.playerMove,
                socket: this.socket}}>
                <Board />
              </GameContext.Provider>
            </div>
          </div>
        </div>
    );
  }
}
