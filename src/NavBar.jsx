import React from "react"
import {NavLink} from "react-router-dom";

export default function NavBar (){
    return(
    <nav className="blue">
    <div className="nav-wrapper" >
      <a href="/" className="brand-logo center" ><i className= " material-icons">face</i></a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><NavLink to = "/about">About</NavLink></li>
            <li><NavLink to = "/gallery">My projects</NavLink></li>
            <li><NavLink to = "/projects">Contact</NavLink></li>
      </ul>
    </div>
  </nav>
    )
}

           