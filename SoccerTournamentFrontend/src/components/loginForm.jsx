import react from "react";
import React, { Component } from "react";
import Joi from "joi";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    error: {},
  };

  validate = () => {};

  handleSubmit = (e) => {
    e.preventDefault(); //For stopping the whole reload of page
    const error = this.validate();
    console.log(error);

    if (error) return;

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
            <label htmlFor="username">UserName</label>
            <input
              autoFocus
              value={this.state.account.username}
              onChange={this.handleChange}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">PassWord</label>
            <input
              autoFocus
              value={this.state.account.password}
              onChange={this.handleChangePassword}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary m-2">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
