import React from "react";
import "./Cartoon.css";

const Cartoon = props => (
  <div className="col-lg-3 col-sm-6 cartoonTopDiv">
    <div className="card">
      <div className="img-container">
        <a href="#!" onClick={() => props.pickCartoon(props.character)}>
          <img className="imgItem" alt={props.character} src={props.url} />
        </a>
      </div>
    </div>
  </div>
);

export default Cartoon;
