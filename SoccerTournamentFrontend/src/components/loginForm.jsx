
import React, { Component } from "react";
import { connect } from 'react-redux';
import { signIn } from '../actions'
import { menuItems } from "./menuItems";
import { NavLink } from "react-router-dom";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    error: {},
  };

  validate = () => {
    let account = this.state.account;
    let isValid = true;
    let error = {};
    if(!account["username"])
    {
      isValid = false;
      error["username"] = "Username is mandatory";
    }
    if(!account["password"])
    {
      isValid = false;
      error["password"] = "Password is mandatory";
    }
    this.setState({
      error:error
    });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault(); //For stopping the whole reload of page
    const error = this.validate();
    console.log(error);

    //if (error) return;
    if(error)
    {
      let account = {};
      account["username"]="";
      account["password"]="";
      this.setState({account:account});
    }
    
    this.props.signIn(this.state.account)

    console.log("Submitteed");
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  handleChangePassword = (e) => {
    const account = { ...this.state.account };
    account.password = e.currentTarget.value;
    this.setState({ account });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username"><b>Username*</b></label>
            <input
              autoFocus
              value={this.state.account.username}
              onChange={this.handleChange}
              id="username"
              type="text"
              className="form-control"/>
              <div className="text-danger">{this.state.error.username}</div>
          </div>
          <div className="form-group">
            <label htmlFor="password"><b>Password*</b></label>
            <input
              autoFocus
              value={this.state.account.password}
              onChange={this.handleChangePassword}
              id="password"
              type="text"
              className="form-control"
            />
            <div className="text-danger">{this.state.error.password}</div>
          </div>
          <button className="btn btn-primary m-2">Login</button>
        </form>
        {
          this.props.sign_in_error?
          <div> Wrong Credentials! Please try again</div>
          :
          null
        }
        <NavLink to={menuItems[5].url}>
                  {menuItems[5].title}
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
      role: state.auth.role,
      reg_date: state.auth.reg_date,
      email: state.auth.email,
      gender: state.auth.gender,
      first_name: state.auth.first_name,
      last_name: state.auth.last_name,
      withdraw_flag: state.auth.withdraw_flag,
      sign_in_error: state.auth.sign_in_error
  }
}

export default connect(mapStateToProps, {signIn})(LoginForm);
