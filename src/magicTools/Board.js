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

    initPieces(x,y){
        if(y > 2 && y < 7){
            return "void"
        }
        if(y == 7 || y == 2 ){
            return "pawn"
        }
        return "king";
    }

    initColors(y){
        if(y > 4){
            return "white";
        }else{
            return "black";
        }
    }

    renderSquare(i, j, key) {
    return (
        <GameContext.Consumer key={key}>
        {(gameContext) => (
            <GameContext.Provider value={gameContext}>
                <Square value={i + 10*j} gameContext={gameContext} piece={this.initPieces(i,j)} pieceColor={this.initColors(j)}/>
            </GameContext.Provider>
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
                children.push(this.renderSquare(i,j, key++));
            }
          table.push(<div className="board-row" key={key++}>{children}</div>);
        }
        return(<div className="chess-board"> {table} </div>);
    }
  }