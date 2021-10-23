import react from "react";
import React, { Component } from "react";
import Joi from "joi";
import { isValidElement } from "react";

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
      </div>
    );
  }
}

export default LoginForm;
