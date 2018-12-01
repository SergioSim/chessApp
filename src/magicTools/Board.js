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

    renderSquare(i){
      return <Square value={i}/>;
    }

    createBoard(){
        let table = [];
        for (let i = 0; i < 8; i++){
            let children = [];
            for(let j = 0; i<8; j++){
                children.push(this.renderSquare(i+j));
            }
          table.push(<div className="board-row">{children}</div>);
        }
        return table;
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
          
        </div>
      );
    }
  }