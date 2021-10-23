import react from "react";
import React, { Component } from "react";
import Joi from "joi";

class CreateTeam extends Component {
  state = {
    team_details: { team_name: "", reg_date: "", coach_id:"" },
    error: {},
  };

  validate = () => {};

  handleSubmit = (e) => {
    e.preventDefault(); //For stopping the whole reload of page
    const error = this.validate();
    console.log(error);

    if (error) return;

    console.log("Submitted");
  };

  handleChange = (e) => {
    const team_details = { ...this.state.team_details };
    team_details.team_name = e.currentTarget.value;
    this.setState({ team_details });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="teamname">Team Name</label>
            <input
              autoFocus
              value={this.state.team_details.team_name}
              onChange={this.handleChange}
              id="teamname"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary m-2">Register</button>
        </form>
      </div>
    );
  }
}

export default CreateTeam;
