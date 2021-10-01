import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import LoginForm from "./loginForm";
import { menuItems } from "./menuItems";
import "./navBar.css";
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navBarItems">
          <h1 className="navbar-logo">Soccer Tournament</h1>

          <ul className="nav-menu">
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink className={item.cName} to={item.url}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
