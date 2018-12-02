import React, { Component } from 'react';
import {Square} from './Square';

export class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            board: []
        };
    }

    renderSquare(i, key) {
      return <Square key={key} value={i} size={Math.min(this.state.width,this.state.height)}/>;
    }

    renderBoard(){
        console.log(this.state.height);
        let table = [];
        let key = 1;
        for (let i = 0; i<8; i++){
            let children = [];
            for(let j = 0; j<8; j++){
                children.push(this.renderSquare(i+j, key++));
            }
          table.push(<div className="board-row" height={this.state.height / 8 - 3} key={key++}>{children}</div>);
        }
        this.setState({board: <div> {table} </div>});
    }

    updateDimentions(){
        this.setState({width: window.innerWidth - 8, height: window.innerHeight - 8});
        console.log("updating window size...");
    }

    componentWillMount(){
        this.updateDimentions();
    }

    componentDidMount(){
        this.renderBoard();
        window.addEventListener("resize", this.updateDimentions());
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimentions());
    }
  
    render() {
        const divStyle = {
            height: this.state.height,
            width: this.state.width
        };
  
        return (
            <div style={divStyle}>
                {this.state.board}
            </div>
        );
    }
  }