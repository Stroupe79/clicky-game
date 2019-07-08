import React from "react";

var score = 0;
var highScore = 0;

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            Score: {score} | High Score: {highScore}
        </nav>
    )
}

export default Navbar