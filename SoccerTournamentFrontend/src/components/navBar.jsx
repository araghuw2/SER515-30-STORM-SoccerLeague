import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, NavLink } from "react-router-dom";

import LoginForm from "./loginForm";
import { menuItems } from "./menuItems";
import "./navBar.css";
import { signOut } from "../actions";
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navBarItems">
          <h1 className="navbar-logo">Soccer Tournament</h1>
          <ul className="nav-menu">
          {
            this.props.isSignedIn==true?
              <li>
                <NavLink className={menuItems[7].cName} to={menuItems[7].url}>
                  {menuItems[7].title}
                </NavLink>
              </li>
              : null
          }
            { menuItems.slice(0,4).map((item, index) => {
              return (
                <li key={index}>
                  <NavLink className={item.cName} to={item.url}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
            {
            this.props.isSignedIn==true?
              <li>
                <NavLink onClick={this.props.signOut} className={menuItems[6].cName} to={menuItems[6].url}>
                  {menuItems[6].title}
                </NavLink>
              </li>
              :
              <li>
                <NavLink className={menuItems[4].cName} to={menuItems[4].url}>
                  {menuItems[4].title}
                </NavLink>
              </li>             
          }
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    isSignedIn: state.auth.isSignedIn,
  }
}

export default connect(mapStateToProps, { signOut })(NavBar);
