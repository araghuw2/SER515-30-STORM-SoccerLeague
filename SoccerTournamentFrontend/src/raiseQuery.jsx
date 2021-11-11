import React, { Component } from "react";
class RaiseQuery extends Component {
  state = {
    account: {
      firstname: "",
      lastname: "",
    },
    error: {},
  };

  validate = () => {
    let account = this.state.account;
    let isValid = true;
    let error = {};
    if (!account["firstname"]) {
      isValid = false;
      error["firstname"] = "Firstname is mandatory";
    }
    if (!account["lastname"]) {
      isValid = false;
      error["lastname"] = "Lastname is mandatory";
    }

    this.setState({
      error: error,
    });
    return isValid;
  };
  handleSubmit = (e) => {
    e.preventDefault(); //For stopping the whole reload of page
    const error = this.validate();
    console.log(error);

    //if (error) return;
    if (error) {
      let account = {};
      account["firstname"] = "";
      account["lastname"] = "";
      this.setState({ account: account });
    }

    console.log("Submitteed");
  };

  render() {
    return (
      //<Popup position="right center">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            <b>First Name*</b>
          </label>
          <input type="text" className="form-control" />
          <div className="text-danger">{this.state.error.firstname}</div>
        </div>

        <div className="form-group">
          <label>
            <b>Last Name*</b>
          </label>
          <input type="text" className="form-control" />
          <div className="text-danger">{this.state.error.lastname}</div>
        </div>

        <div className="form-group">
          <label>
            <b>Message*</b>
          </label>
          <input type="msg" className="form-control" />
        </div>
        <button className="btn btn-primary m-2">Submit</button>
      </form>
      //</Popup>
    );
  }
}

export default RaiseQuery;
