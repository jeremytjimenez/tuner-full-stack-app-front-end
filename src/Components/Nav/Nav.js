import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css"

function Nav() {
  return (
    <div className="nav">
        <p className="title">Tuner</p>
      <p className="left">
        <Link to="/">Home</Link>
      </p>
      <p className="right">
        <Link to="/songs">Songs</Link>
      </p>
      <p className="right">
        <Link to="/songs/new-song">New Song</Link>
      </p>
    </div>
  );
}

export default Nav;