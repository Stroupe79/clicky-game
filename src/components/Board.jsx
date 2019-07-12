import React from "react";
import "./style.css"

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const card = () => { array.map()

};

function Board(props) {
    return (

    <div className="board">
      {props.children}
      </div>

      )
  }

  export default Board;