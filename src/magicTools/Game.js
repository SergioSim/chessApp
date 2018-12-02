import React, { Component } from 'react';
import {Board} from './Board';
import './css/Game.css';

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
        width: 0,
        height: 0
    };
  }

  updateDimentions(){
    this.setState({width: window.innerWidth - 8, height: window.innerHeight - 8});
    console.log("updating dimensions...");
  }

  componentDidMount(){
    this.updateDimentions();
    window.addEventListener("resize", this.updateDimentions.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimentions.bind(this));
  }

  render() {
    const size = Math.min(this.state.width, this.state.height);
    const divStyle = {
      width: size,
      height:size
      };
    return (
      <div className="game">
        <div className="game-board" style={divStyle}>
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
  