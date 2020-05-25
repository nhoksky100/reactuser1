import React, { Component } from 'react';
import { BrowserRouter as Link, NavLink } from "react-router-dom";
class MenuTop extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container">
              
              <NavLink to="/" className="navbar-brand">Start Bootstrap</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                   
                    <NavLink to="/Signup" className="nav-link">Sign Up</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink to="/Login" className="nav-link">Log In</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default MenuTop;