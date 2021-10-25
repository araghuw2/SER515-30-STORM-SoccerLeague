import react from "react";
import React, { Component } from "react";
import Joi from "joi";
import "./createTeam.css"

class CreateTeam extends Component {
  state = {
    team_details: { team_name: "", reg_date: "", coach_id: "" },
    /*player:{player_name: "", player_age: "", player_gender: ""}*/
    error: {},
  };

  validate = () => { };

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
            <br />
            <div class="row">
              <div class="column">
                <fieldset>
                  <legend> Player 1 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playername" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="playerage" type="text" className="form-control"/>
                  <label htmlFor="Player1Gender"> Gender </label>
                  <div> &nbsp;&nbsp;
                    <input type="radio" value="Male" id="Playergender" /> Male&nbsp;
                    <input type="radio" value="Female" id="Playergender" /> Female&nbsp;
                    <input type="radio" value="Other" id="Playergender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 3 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playername" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="playerage" type="text" className="form-control"/>
                  <label htmlFor="Player1Gender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="Playergender" /> Male&nbsp;
                    <input type="radio" value="Female" id="Playergender" /> Female&nbsp;
                    <input type="radio" value="Other" id="Playergender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 5 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playername" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="playerage" type="text" className="form-control"/>
                  <label htmlFor="Player1Gender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="Playergender" />Male&nbsp;
                    <input type="radio" value="Female" id="Playergender" />Female&nbsp;
                    <input type="radio" value="Other" id="Playergender" />Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 7 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playername" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="playerage" type="text" className="form-control"/>
                  <label htmlFor="Player1Gender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="Playergender" /> Male&nbsp;
                    <input type="radio" value="Female" id="Playergender" /> Female&nbsp;
                    <input type="radio" value="Other" id="Playergender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 9 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playername" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="playerage" type="text" className="form-control"/>
                  <label htmlFor="Player1Gender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="Playergender" /> Male&nbsp;
                    <input type="radio" value="Female" id="Playergender" /> Female&nbsp;
                    <input type="radio" value="Other" id="Playergender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>
              </div>

              <div class="column">
              <fieldset>
                  <legend> Player 2 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playername" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="playerage" type="text" className="form-control"/>
                  <label htmlFor="Player1Gender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="Playergender" /> Male&nbsp;
                    <input type="radio" value="Female" id="Playergender" /> Female&nbsp;
                    <input type="radio" value="Other" id="Playergender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 4 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playername" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="playerage" type="text" className="form-control"/>
                  <label htmlFor="Player1Gender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="Playergender" /> Male&nbsp;
                    <input type="radio" value="Female" id="Playergender" /> Female&nbsp;
                    <input type="radio" value="Other" id="Playergender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 6 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playername" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="playerage" type="text" className="form-control"/>
                  <label htmlFor="Player1Gender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="Playergender" /> Male&nbsp;
                    <input type="radio" value="Female" id="Playergender" /> Female&nbsp;
                    <input type="radio" value="Other" id="Playergender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 8 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playername" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="playerage" type="text" className="form-control"/>
                  <label htmlFor="Player1Gender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="Playergender" /> Male&nbsp;
                    <input type="radio" value="Female" id="Playergender" /> Female&nbsp;
                    <input type="radio" value="Other" id="Playergender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 10 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playername" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="playerage" type="text" className="form-control"/>
                  <label htmlFor="Player1Gender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="Playergender" /> Male&nbsp;
                    <input type="radio" value="Female" id="Playergender" /> Female&nbsp;
                    <input type="radio" value="Other" id="Playergender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>
              </div>

            </div>
          </div>
          <button className="btn btn-primary m-2">Register</button>
        </form>
      </div>
    );
  }
}

export default CreateTeam;
