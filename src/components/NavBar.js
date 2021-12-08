import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "60px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "pink",
  textDecoration: "none",
  color: "white",
}

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "#eec0c6"}}>
        Home
      </NavLink>
      <NavLink to="/movies" exact style={linkStyles} activeStyle={{background: "#eec0c6"}}>
        Movies
      </NavLink>
      <NavLink to="/directors" exact style={linkStyles} activeStyle={{background: "#eec0c6"}}>
        Directors
      </NavLink>
      <NavLink to="/actors" exact style={linkStyles} activeStyle={{background: "#eec0c6"}}>
        Actors
      </NavLink>
    </div>
  )
}

export default NavBar;
