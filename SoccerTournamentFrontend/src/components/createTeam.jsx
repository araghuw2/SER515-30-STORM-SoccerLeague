import react from "react";
import React, { Component } from "react";
import Joi from "joi";
import "./createTeam.css"

class CreateTeam extends Component {
  state = {
    team_details: { team_name: "", coach_id: "" ,
    player_details:[
      {name:"",email:"",age:"",gender:""},
      {name:"",email:"",age:"",gender:""},
      {name:"",email:"",age:"",gender:""},
      {name:"",email:"",age:"",gender:""},
      {name:"",email:"",age:"",gender:""},
      {name:"",email:"",age:"",gender:""},
      {name:"",email:"",age:"",gender:""},
      {name:"",email:"",age:"",gender:""},
      {name:"",email:"",age:"",gender:""},
      {name:"",email:"",age:"",gender:""},
    ],
  },
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

  setPlayerDetail = (e,index) => {
    let team_details = {...this.state.team_details}
    let player_details = {...team_details.player_details}

    let the_player = {...player_details[index]}

    let key = e.target.id;
    let val = e.target.value;

    the_player = {
      ...the_player,
      [key] : val
    }
    player_details[index] = the_player;
    team_details.player_details = player_details;

    this.setState({ team_details });
  }

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
                  <label htmlFor="PlayerName"> Name </label>
                  <input id="name" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,0)}/>
                  <label htmlFor="PlayerEmail"> Email </label>
                  <input id="email" type="text" className="form-control"/>
                  <label htmlFor="PlayerAge"> Age </label>
                  <input id="age" type="text" className="form-control"/>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div> &nbsp;&nbsp;
                    <input type="radio" value="Male" id="gender" /> Male&nbsp;
                    <input type="radio" value="Female" id="gender" /> Female&nbsp;
                    <input type="radio" value="Other" id="gender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 3 </legend>
                  <label htmlFor="PlayerName"> Name </label>
                  <input id="name" type="text" className="form-control"/>
                  <label htmlFor="PlayerEmail"> Email </label>
                  <input id="email" type="text" className="form-control"/>
                  <label htmlFor="PlayerAge"> Age </label>
                  <input id="age" type="text" className="form-control"/>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="gender" /> Male&nbsp;
                    <input type="radio" value="Female" id="gender" /> Female&nbsp;
                    <input type="radio" value="Other" id="gender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 5 </legend>
                  <label htmlFor="PlayerName"> Name </label>
                  <input id="name" type="text" className="form-control"/>
                  <label htmlFor="PlayerEmail"> Email </label>
                  <input id="email" type="text" className="form-control"/>
                  <label htmlFor="PlayerAge"> Age </label>
                  <input id="age" type="text" className="form-control"/>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="gender" />Male&nbsp;
                    <input type="radio" value="Female" id="gender" />Female&nbsp;
                    <input type="radio" value="Other" id="gender" />Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 7 </legend>
                  <label htmlFor="PlayerName"> Name </label>
                  <input id="name" type="text" className="form-control"/>
                  <label htmlFor="PlayerEmail"> Email </label>
                  <input id="email" type="text" className="form-control"/>
                  <label htmlFor="PlayerAge"> Age </label>
                  <input id="age" type="text" className="form-control"/>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="gender" /> Male&nbsp;
                    <input type="radio" value="Female" id="gender" /> Female&nbsp;
                    <input type="radio" value="Other" id="gender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 9 </legend>
                  <label htmlFor="PlayerName"> Name </label>
                  <input id="name" type="text" className="form-control"/>
                  <label htmlFor="PlayerEmail"> Email </label>
                  <input id="email" type="text" className="form-control"/>
                  <label htmlFor="PlayerAge"> Age </label>
                  <input id="age" type="text" className="form-control"/>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="gender" /> Male&nbsp;
                    <input type="radio" value="Female" id="gender" /> Female&nbsp;
                    <input type="radio" value="Other" id="gender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>
              </div>

              <div class="column">
              <fieldset>
                  <legend> Player 2 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="name" type="text" className="form-control"/>
                  <label htmlFor="Player1Email"> Email </label>
                  <input id="email" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="age" type="text" className="form-control"/>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="gender" /> Male&nbsp;
                    <input type="radio" value="Female" id="gender" /> Female&nbsp;
                    <input type="radio" value="Other" id="gender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 4 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="name" type="text" className="form-control"/>
                  <label htmlFor="Player1Email"> Email </label>
                  <input id="email" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="age" type="text" className="form-control"/>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="gender" /> Male&nbsp;
                    <input type="radio" value="Female" id="gender" /> Female&nbsp;
                    <input type="radio" value="Other" id="gender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 6 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="name" type="text" className="form-control"/>
                  <label htmlFor="Player1Email"> Email </label>
                  <input id="email" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="age" type="text" className="form-control"/>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="gender" /> Male&nbsp;
                    <input type="radio" value="Female" id="gender" /> Female&nbsp;
                    <input type="radio" value="Other" id="gender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 8 </legend>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="name" type="text" className="form-control"/>
                  <label htmlFor="Player1Email"> Email </label>
                  <input id="email" type="text" className="form-control"/>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="age" type="text" className="form-control"/>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="gender" /> Male&nbsp;
                    <input type="radio" value="Female" id="gender" /> Female&nbsp;
                    <input type="radio" value="Other" id="gender" /> Other&nbsp;
                  </div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 10 </legend>
                  <label htmlFor="PlayerName"> Name </label>
                  <input id="name" type="text" className="form-control"/>
                  <label htmlFor="PlayerEmail"> Email </label>
                  <input id="email" type="text" className="form-control"/>
                  <label htmlFor="PlayerAge"> Age </label>
                  <input id="age" type="text" className="form-control"/>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" id="gender" /> Male&nbsp;
                    <input type="radio" value="Female" id="gender" /> Female&nbsp;
                    <input type="radio" value="Other" id="gender" /> Other&nbsp;
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
