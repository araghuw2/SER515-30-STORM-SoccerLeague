import react from "react";
import React, { Component } from "react";
//import Popup from 'reactjs-popup';

class SignUp extends React.Component {
  state = {
    account: { firstname: "", lastname: "", email: "", password: "", confirmpassword:"", gender:"", role:""},
    error: {},
  };
  
  validate = () => {
    let account = this.state.account;
    let isValid = true;
    let error = {};
    if(!account["firstname"])
    {
      isValid = false;
      error["firstname"] = "Firstname is mandatory";
    }
    if(!account["lastname"])
    {
      isValid = false;
      error["lastname"] = "Lastname is mandatory";
    }
    if(!account["email"])
    {
      isValid = false;
      error["email"] = "Email is mandatory";
    }
    if(!account["password"])
    {
      isValid = false;
      error["password"] = "Password is mandatory";
    }
    if(!account["confirmpassword"])
    {
      isValid = false;
      error["confirmpassword"] = "Confirming the password is mandatory";
    }
    if (typeof account["password"] !== "undefined" && typeof account["confirm_password"] !== "undefined") {
          
      if (account["password"] != account["confirm_password"]) {
        isValid = false;
        error["password"] = "Passwords don't match";
      }
    }
    if(!account["gender"])
    {
      isValid = false;
      error["gender"] = "Choosing an option is mandatory";
    }
    if(!account["role"])
    {
      isValid = false;
      error["role"] = "Choosing a role is mandatory";
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
      account["firstname"]="";
      account["lastname"]="";
      account["email"]="";
      account["password"]="";
      account["confirmpassword"]="";
      account["gender"]="";
      account["role"]="";
      this.setState({account:account});
    }

    console.log("Submitteed");
  };

  render() {
    return (
      //<Popup position="right center">
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label><b>First Name*</b></label>
                <input type="text" className="form-control" />
                <div className="text-danger">{this.state.error.firstname}</div>
            </div>

            <div className="form-group">
                <label><b>Last Name*</b></label>
                <input type="text" className="form-control"  />
                <div className="text-danger">{this.state.error.lastname}</div>
            </div>

            <div className="form-group">
                <label><b>Email Address*</b></label>
                <input type="email" className="form-control" />
                <div className="text-danger">{this.state.error.email}</div>
            </div>

            <div className="form-group">
                <label><b>Password*</b></label>
                <input type="password" className="form-control"  />
                <div className="text-danger">{this.state.error.password}</div>
            </div>

            <div className="form-group">
                <label><b>Confirm Password*</b></label>
                <input type="password" className="form-control"  />
                <div className="text-danger">{this.state.error.confirmpassword}</div>
            </div>
            <label><b> Gender*</b> </label>
            <div className="text-danger">{this.state.error.gender}</div>
            <div className="radio">
              <label>
              <input 
                value="male"
                name="gender"
                type="radio"
                onChange={this.handleChange}
              />
              Male
              </label>
              </div>
              <div className="radio">
              <label>
              <input 
                value="female"
                name="gender"
                type="radio"
                onChange={this.handleChange}
              />
              Female 
              </label>

              </div>
              <div className="radio">
              <label>
              <input 
                value="prefer not to say"
                name="gender"
                type="radio"
                onChange={this.handleChange}
              />
              Prefer not to say
              </label>
            </div>
            <label><b> Role*</b> </label>
            <div className="text-danger">{this.state.error.role}</div>
            <div className="radio">
              <label>
              <input 
                value="coach"
                name="role"
                type="radio"
                onChange={this.handleChange}
              />
              Coach
              </label>
              </div>
              <div className="radio">
              <label>
              <input 
                value="referee"
                name="role"
                type="radio"
                onChange={this.handleChange}
              />
              Referee
              </label>

              </div>
              <div className="radio">
              <label>
              <input 
                value="field site manager"
                name="gender"
                type="radio"
                onChange={this.handleChange}
              />
              Field Site Manager
              </label>
            </div>
          <button className="btn btn-primary m-2">Sign Up</button>
            
        </form>
        //</Popup>
    );
  }
}

export default SignUp;

