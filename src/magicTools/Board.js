import React, { Component } from 'react';
import {Square} from './Square';
import {GameContext} from './Game'

export class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: []
        };
    }

    renderSquare(i, key) {
    return (
        <GameContext.Consumer key={key}>
        {(gameContext) => (
            <Square value={i} gameContext={gameContext}/>
        )}
        </GameContext.Consumer>
    );
    }

    render() {
        let table = [];
        let key = 1;
        for (let i = 1; i<9; i++){
            let children = [];
            for(let j = 1; j<9; j++){
                children.push(this.renderSquare(i+10*j, key++));
            }
          table.push(<div className="board-row" key={key++}>{children}</div>);
        }
        return(<div className="chess-board"> {table} </div>);
    }
  }