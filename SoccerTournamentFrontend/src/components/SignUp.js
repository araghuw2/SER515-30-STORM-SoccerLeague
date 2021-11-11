import React from "react";
import { connect } from 'react-redux';
import { signUp } from '../actions'

class SignUp extends React.Component {
  state = {
    account: { first_name: "", last_name: "", email: "", password: "", confirmpassword:"", gender:"", role:""},
    error: {},
  };
  
  validate = () => {
    let account = this.state.account;
    let isValid = true;
    let error = {};
    if(!account["first_name"])
    {
      isValid = false;
      error["first_name"] = "Firstname is mandatory";
    }
    if(!account["last_name"])
    {
      isValid = false;
      error["last_name"] = "Lastname is mandatory";
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

    if(error)
    {
      let account = {};
      account["first_name"]="";
      account["last_name"]="";
      account["email"]="";
      account["password"]="";
      account["confirmpassword"]="";
      account["gender"]="";
      account["role"]="";
      this.setState({account:account});
    }

    this.props.signUp(this.state.account)

    console.log("Submitteed");
  };

  handleChangeFirstName = (e) => {
    const account = { ...this.state.account };
    account.first_name = e.currentTarget.value;
    this.setState({ account });
  };

  handleChangeLastName = (e) => {
    const account = { ...this.state.account };
    account.last_name = e.currentTarget.value;
    this.setState({ account });
  };

  handleChangeEmail = (e) => {
    const account = { ...this.state.account };
    account.email = e.currentTarget.value;
    this.setState({ account });
  };

  handleChangePassword = (e) => {
    const account = { ...this.state.account };
    account.password = e.currentTarget.value;
    this.setState({ account });
  };

  handleChangeConfirmPassword = (e) => {
    const account = { ...this.state.account };
    account.confirmPassword = e.currentTarget.value;
    this.setState({ account });
  };

  handleChangeGender = (e) => {
    const account = { ...this.state.account };
    account.gender = e.currentTarget.value;
    this.setState({ account });
  };

  handleChangeRole = (e) => {
    const account = { ...this.state.account };
    account.role = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      //<Popup position="right center">
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label><b>First Name*</b></label>
                <input type="text" className="form-control" onChange={this.handleChangeFirstName} />
                <div className="text-danger">{this.state.error.first_name}</div>
            </div>

            <div className="form-group">
                <label><b>Last Name*</b></label>
                <input type="text" className="form-control" onChange={this.handleChangeLastName} />
                <div className="text-danger">{this.state.error.last_name}</div>
            </div>

            <div className="form-group">
                <label><b>Email Address*</b></label>
                <input type="email" className="form-control" onChange={this.handleChangeEmail}/>
                <div className="text-danger">{this.state.error.email}</div>
            </div>

            <div className="form-group">
                <label><b>Password*</b></label>
                <input type="password" className="form-control" onChange={this.handleChangePassword} />
                <div className="text-danger">{this.state.error.password}</div>
            </div>

            <div className="form-group">
                <label><b>Confirm Password*</b></label>
                <input type="password" className="form-control" onChange={this.handleChangeConfirmPassword} />
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
                onChange={this.handleChangeGender}
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
                onChange={this.handleChangeGender}
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
                onChange={this.handleChangeGender}
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
                onChange={this.handleChangeRole}
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
                onChange={this.handleChangeRole}
              />
              Referee
              </label>

              </div>
              <div className="radio">
              <label>
              <input 
                value="field site manager"
                name="role"
                type="radio"
                onChange={this.handleChangeRole}
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

export default connect(mapStateToProps, {signUp})(SignUp);
