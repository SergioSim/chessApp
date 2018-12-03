import React, { Component } from 'react';
import {Board} from './Board';
import './css/Game.css';

export const GameContext = React.createContext();

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
        width: 0,
        height: 0,
        playerColor: "Black"
    };
  }

  updateDimentions(){
    this.setState({width: window.innerWidth, height: window.innerHeight});
    console.log("updating dimensions...");
  }

  componentDidMount(){
    this.updateDimentions();
    window.addEventListener("resize", this.updateDimentions.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimentions.bind(this));
  }

  changePlayerColor(){
    console.log(this.state.playerColor);
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
    if(infoSize > 270 ){
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
                <button onClick={() => this.changePlayerColor()}>Change to {this.state.playerColor}</button>
            </div>
          </div>
        <div className="fake-info" style={fakeFloat}></div>
          <div className="game">
            <div className="game-board" style={divStyle}>
              <GameContext.Provider value={this.state.playerColor}>
                <Board />
              </GameContext.Provider>
            </div>
          </div>
        </div>
    );
  }
}
