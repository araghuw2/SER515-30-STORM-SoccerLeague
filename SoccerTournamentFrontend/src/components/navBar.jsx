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
                <NavLink className={menuItems[9].cName} to={menuItems[9].url}>
                  {menuItems[9].title}
                </NavLink>
              </li>
              : null
          }
            { menuItems.slice(0,5).map((item, index) => {
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
                <NavLink onClick={this.props.signOut} className={menuItems[8].cName} to={menuItems[8].url}>
                  {menuItems[8].title}
                </NavLink>
              </li>
              :
              <li>
                <NavLink className={menuItems[5].cName} to={menuItems[5].url}>
                  {menuItems[5].title}
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
