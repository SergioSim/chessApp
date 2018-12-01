import React, { Component } from 'react';
import {Square} from './Square';

export class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 5,
            height: 0,
            board: []
        };
    }

    renderSquare = (i,key) => {
        console.log(this.state.width);
      return <Square key={key} value={i} size={Math.min(this.state.width,this.state.height)}/>;
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
        this.setState({board: <div> {table} </div>});
    }

    reRenderBoard(){
        if(this.state.board.length === 0) return;
        this.state.board.props.children[1].forEach(children => {
            children.props.children.forEach( child => {
                child.type.getDerivedStateFromProps(
                    {size:Math.min(this.state.width,this.state.height)},
                    {});
            })
        });
    }

    updateDimentions(){
        console.log("updating window size...");
        this.setState({width: window.innerWidth - 8, height: window.innerHeight - 8}, this.reRenderBoard());
    }

    componentWillMount(){
        this.updateDimentions();
    }

    componentDidMount(){
        this.renderBoard();
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
                {this.state.board}
            </div>
        );
    }
  }