import React from "react";
import "./Nav.css";

const Nav = props => (
  <div className="nav-div">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item my-nav-item">
          <a href="/">Clicky Game</a>
        </li>
        <li className="nav-item my-nav-item">{props.mes}</li>
        <li className="nav-item my-nav-item">Score: {props.curScore} | Top Score: {props.topScore}</li>
      </ul>
  </div>
);

export default Nav;
