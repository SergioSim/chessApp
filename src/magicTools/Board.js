import React, { Component } from 'react';
import {Square} from './Square';

export class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
    }

    renderSquare(i) {
      return <Square value={i}/>;
    }

    updateDimentions(){
        this.setState({width: window.innerWidth, height: window.innerHeight});
        console.log("updating window size...");
    }

    componentWillMount(){
        this.updateDimentions();
    }

    componentDidMount(){
        window.addEventListener("resize", this.updateDimentions.bind(this));
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimentions.bind(this));
    }
  
    render() {
        const divStyle = {
            height: this.state.height,
            width: this.state.width
        };
  
        return (
            <div style={divStyle}>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
            </div>
        );
    }
  }