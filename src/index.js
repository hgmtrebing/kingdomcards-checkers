import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class CheckersSquare extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={"square " + this.props.color}></div>
        );
    }
}

class CheckersBoard extends React.Component {

    render() {
        return (
        <div>
            <div className="board-row">
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
            </div>
            <div className="board-row">
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
            </div>
            <div className="board-row">
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
            </div>
            <div className="board-row">
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
            </div>
            <div className="board-row">
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
            </div>
            <div className="board-row">
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
            </div>
            <div className="board-row">
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
            </div>
            <div className="board-row">
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
                <CheckersSquare color="white-square"/>
                <CheckersSquare color="black-square"/>
            </div>
        </div>
        );
    }
}

class CheckersApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <CheckersBoard />
            </div>
        );
    }
}

ReactDOM.render( <CheckersApp/>, document.getElementById("root"))
