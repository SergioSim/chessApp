import React, { Component } from 'react';
import {Square} from './Square';

export class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: []
        };
    }

    renderSquare(i, key) {
      return <Square key={key} value={i}/>;
    }

    renderBoard(){
        let table = [];
        let key = 1;
        for (let i = 0; i<8; i++){
            let children = [];
            for(let j = 0; j<8; j++){
                children.push(this.renderSquare(i+j, key++));
            }
          table.push(<div className="board-row" key={key++}>{children}</div>);
        }
        this.setState({board: <div className="chess-board"> {table} </div>});
    }

    componentDidMount(){
        this.renderBoard();
    }
  
    render() {
        const divStyle = {
            height: this.state.height,
            width: this.state.width
        };
  
        return (this.state.board
        );
    }
  }