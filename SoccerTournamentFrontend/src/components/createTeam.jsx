import React, { Component } from "react";
import "./createTeam.css"
import { registerTeam } from '../actions'
import { connect } from "react-redux";

class CreateTeam extends Component {

  state = {
    teamDetail: { team_name: "", coach_id: "" ,
    playerList:[],
  },
    error: {},
  };

   

  validate = () => {
    let teamDetail = this.state.teamDetail;
    let isValid = true;
    let error = {};
    if (!teamDetail["team_name"]) {
      isValid = false;
      error["team_name"] = "Team Name is mandatory";
    }

    //Player fields check
    for (var index = 0; index < 10; index++) {

      var ui_index = index+1
      if (!teamDetail.playerList[index]) {
        isValid = false;
        error["player_error_"+ui_index] = "Enter Player Details"
      }
      else {
        if (!teamDetail.playerList[index].playerName) {
          isValid = false;
          error["player_name_error_"+ui_index] = "Enter Player Name"
        }
        if (!teamDetail.playerList[index].email) {
          isValid = false;
          error["player_email_error_"+ui_index] = "Enter Player Email"
        }
        if (!teamDetail.playerList[index].age) {
          isValid = false;
          error["player_age_error_"+ui_index] = "Enter Player age"
        }
        if (!teamDetail.playerList[index].gender) {
          isValid = false;
          error["player_gender_error_"+ui_index] = "Enter Player Gender"
        }
      }
    }

    this.setState({ error: error });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault(); //For stopping the whole reload of page
    const error = this.validate();
    console.log(error);

    //if (error) return;
    if(error)
    {
      let temp_teamDetail = { team_name: "", coach_id: "" ,
      playerList:[],
    };
      this.setState({teamDetail:temp_teamDetail});
    }
    
    this.props.registerTeam(this.state.teamDetail, this.props.id);

    console.log("New Team details submitted");
  };

  handleChange = (e) => {
    const teamDetail = { ...this.state.teamDetail };
    teamDetail.team_name = e.currentTarget.value;
    this.setState({ teamDetail });
  };

  setPlayerDetail = (e,index) => {
    let teamDetail = {...this.state.teamDetail}
    let playerList = {...teamDetail.playerList}

    let the_player = {...playerList[index]}

    let key = e.target.id;
    let val = e.target.value;

    the_player = {
      ...the_player,
      [key] : val
    }
    playerList[index] = the_player;
    teamDetail.playerList = playerList;

    this.setState({ teamDetail });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="teamname">Team Name</label>
            <input
              autoFocus
              value={this.state.teamDetail.team_name}
              onChange={this.handleChange}
              id="team_name"
              type="text"
              className="form-control"
            />
            <div className="text-danger">{this.state.error.team_name}</div>
            <br />
            <div class="row">
              <div class="column">
                <fieldset>
                  <legend> Player 1 </legend>
                  <div className="text-danger">{this.state.error.player_error_1}</div>
                  <label htmlFor="PlayerName"> Name </label>
                  <input id="playerName" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,0)} />
                  <div className="text-danger">{this.state.error.player_name_error_1}</div>
                  <label htmlFor="PlayerEmail"> Email </label>
                  <input id="email" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,0)} />
                  <div className="text-danger">{this.state.error.player_email_error_1}</div>
                  <label htmlFor="PlayerAge"> Age </label>
                  <input id="age" type="number" className="form-control" onChange={(e) => this.setPlayerDetail(e,0)} />
                  <div className="text-danger">{this.state.error.player_age_error_1}</div>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div> &nbsp;&nbsp;
                    <input type="radio" value="Male" name="genderRadio1" id="gender" onChange={(e) => this.setPlayerDetail(e,0)} /> Male&nbsp;
                    <input type="radio" value="Female" name="genderRadio1" id="gender" onChange={(e) => this.setPlayerDetail(e,0)} /> Female&nbsp;
                    <input type="radio" value="Other" name="genderRadio1" id="gender" onChange={(e) => this.setPlayerDetail(e,0)} /> Other&nbsp;
                  </div>
                  <div className="text-danger">{this.state.error.player_gender_error_1}</div>
                  
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 3 </legend>
                  <div className="text-danger">{this.state.error.player_error_3}</div>
                  <label htmlFor="PlayerName"> Name </label>
                  <input id="playerName" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,2)}/>
                  <div className="text-danger">{this.state.error.player_name_error_3}</div>
                  <label htmlFor="PlayerEmail"> Email </label>
                  <input id="email" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,2)}/>
                  <div className="text-danger">{this.state.error.player_email_error_3}</div>
                  <label htmlFor="PlayerAge"> Age </label>
                  <input id="age" type="number" className="form-control" onChange={(e) => this.setPlayerDetail(e,2)}/>
                  <div className="text-danger">{this.state.error.player_age_error_3}</div>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" name="genderRadio3" id="gender" onChange={(e) => this.setPlayerDetail(e,2)} /> Male&nbsp;
                    <input type="radio" value="Female" name="genderRadio3" id="gender" onChange={(e) => this.setPlayerDetail(e,2)} /> Female&nbsp;
                    <input type="radio" value="Other" name="genderRadio3" id="gender" onChange={(e) => this.setPlayerDetail(e,2)} /> Other&nbsp;
                  </div>
                  <div className="text-danger">{this.state.error.player_gender_error_3}</div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 5 </legend>
                  <div className="text-danger">{this.state.error.player_error_5}</div>
                  <label htmlFor="PlayerName"> Name </label>
                  <input id="playerName" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,4)}/>
                  <div className="text-danger">{this.state.error.player_name_error_5}</div>
                  <label htmlFor="PlayerEmail"> Email </label>
                  <input id="email" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,4)}/>
                  <div className="text-danger">{this.state.error.player_email_error_5}</div>
                  <label htmlFor="PlayerAge"> Age </label>
                  <input id="age" type="number" className="form-control" onChange={(e) => this.setPlayerDetail(e,4)}/>
                  <div className="text-danger">{this.state.error.player_age_error_5}</div>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" name="genderRadio5" id="gender" onChange={(e) => this.setPlayerDetail(e,4)} />Male&nbsp;
                    <input type="radio" value="Female" name="genderRadio5" id="gender" onChange={(e) => this.setPlayerDetail(e,4)} />Female&nbsp;
                    <input type="radio" value="Other" name="genderRadio5" id="gender" onChange={(e) => this.setPlayerDetail(e,4)} />Other&nbsp;
                  </div>
                  <div className="text-danger">{this.state.error.player_gender_error_5}</div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 7 </legend>
                  <div className="text-danger">{this.state.error.player_error_7}</div>
                  <label htmlFor="PlayerName"> Name </label>
                  <input id="playerName" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,6)}/>
                  <div className="text-danger">{this.state.error.player_name_error_7}</div>
                  <label htmlFor="PlayerEmail"> Email </label>
                  <input id="email" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,6)}/>
                  <div className="text-danger">{this.state.error.player_email_error_7}</div>
                  <label htmlFor="PlayerAge"> Age </label>
                  <input id="age" type="number" className="form-control" onChange={(e) => this.setPlayerDetail(e,6)}/>
                  <div className="text-danger">{this.state.error.player_age_error_7}</div>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" name="genderRadio7" id="gender"  onChange={(e) => this.setPlayerDetail(e,6)}/> Male&nbsp;
                    <input type="radio" value="Female" name="genderRadio7" id="gender"  onChange={(e) => this.setPlayerDetail(e,6)}/> Female&nbsp;
                    <input type="radio" value="Other" name="genderRadio7" id="gender" onChange={(e) => this.setPlayerDetail(e,6)} /> Other&nbsp;
                  </div>
                  <div className="text-danger">{this.state.error.player_gender_error_7}</div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 9 </legend>
                  <div className="text-danger">{this.state.error.player_error_9}</div>
                  <label htmlFor="PlayerName"> Name </label>
                  <input id="playerName" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,8)}/>
                  <div className="text-danger">{this.state.error.player_name_error_9}</div>
                  <label htmlFor="PlayerEmail"> Email </label>
                  <input id="email" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,8)}/>
                  <div className="text-danger">{this.state.error.player_email_error_9}</div>
                  <label htmlFor="PlayerAge"> Age </label>
                  <input id="age" type="number" className="form-control" onChange={(e) => this.setPlayerDetail(e,8)}/>
                  <div className="text-danger">{this.state.error.player_age_error_9}</div>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" name="genderRadio9" id="gender" onChange={(e) => this.setPlayerDetail(e,8)} /> Male&nbsp;
                    <input type="radio" value="Female" name="genderRadio9" id="gender" onChange={(e) => this.setPlayerDetail(e,8)} /> Female&nbsp;
                    <input type="radio" value="Other" name="genderRadio9" id="gender" onChange={(e) => this.setPlayerDetail(e,8)} /> Other&nbsp;
                  </div>
                  <div className="text-danger">{this.state.error.player_gender_error_9}</div>
                  <br/>
                </fieldset>
              </div>

              <div class="column">
              <fieldset>
                  <legend> Player 2 </legend>
                  <div className="text-danger">{this.state.error.player_error_2}</div>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playerName" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,1)}/>
                  <div className="text-danger">{this.state.error.player_name_error_2}</div>
                  <label htmlFor="Player1Email"> Email </label>
                  <input id="email" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,1)}/>
                  <div className="text-danger">{this.state.error.player_email_error_2}</div>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="age" type="number" className="form-control" onChange={(e) => this.setPlayerDetail(e,1)}/>
                  <div className="text-danger">{this.state.error.player_age_error_2}</div>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" name="genderRadio2" id="gender"  onChange={(e) => this.setPlayerDetail(e,1)}/> Male&nbsp;
                    <input type="radio" value="Female" name="genderRadio2" id="gender"  onChange={(e) => this.setPlayerDetail(e,1)}/> Female&nbsp;
                    <input type="radio" value="Other" name="genderRadio2" id="gender" onChange={(e) => this.setPlayerDetail(e,1)} /> Other&nbsp;
                  </div>
                  <div className="text-danger">{this.state.error.player_gender_error_2}</div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 4 </legend>
                  <div className="text-danger">{this.state.error.player_error_4}</div>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playerName" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,3)}/>
                  <div className="text-danger">{this.state.error.player_name_error_4}</div>
                  <label htmlFor="Player1Email"> Email </label>
                  <input id="email" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,3)}/>
                  <div className="text-danger">{this.state.error.player_email_error_4}</div>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="age" type="number" className="form-control" onChange={(e) => this.setPlayerDetail(e,3)}/>
                  <div className="text-danger">{this.state.error.player_age_error_4}</div>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" name="genderRadio4" id="gender" onChange={(e) => this.setPlayerDetail(e,3)} /> Male&nbsp;
                    <input type="radio" value="Female" name="genderRadio4" id="gender" onChange={(e) => this.setPlayerDetail(e,3)} /> Female&nbsp;
                    <input type="radio" value="Other" name="genderRadio4" id="gender" onChange={(e) => this.setPlayerDetail(e,3)} /> Other&nbsp;
                  </div>
                  <div className="text-danger">{this.state.error.player_gender_error_4}</div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 6 </legend>
                  <div className="text-danger">{this.state.error.player_error_6}</div>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playerName" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,5)}/>
                  <div className="text-danger">{this.state.error.player_name_error_6}</div>
                  <label htmlFor="Player1Email"> Email </label>
                  <input id="email" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,5)}/>
                  <div className="text-danger">{this.state.error.player_email_error_6}</div>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="age" type="number" className="form-control" onChange={(e) => this.setPlayerDetail(e,5)}/>
                  <div className="text-danger">{this.state.error.player_age_error_6}</div>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" name="genderRadio6" id="gender" onChange={(e) => this.setPlayerDetail(e,5)} /> Male&nbsp;
                    <input type="radio" value="Female" name="genderRadio6" id="gender" onChange={(e) => this.setPlayerDetail(e,5)} /> Female&nbsp;
                    <input type="radio" value="Other" name="genderRadio6" id="gender" onChange={(e) => this.setPlayerDetail(e,5)} /> Other&nbsp;
                  </div>
                  <div className="text-danger">{this.state.error.player_gender_error_6}</div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 8 </legend>
                  <div className="text-danger">{this.state.error.player_error_8}</div>
                  <label htmlFor="Player1Name"> Name </label>
                  <input id="playerName" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,7)}/>
                  <div className="text-danger">{this.state.error.player_name_error_8}</div>
                  <label htmlFor="Player1Email"> Email </label>
                  <input id="email" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,7)}/>
                  <div className="text-danger">{this.state.error.player_email_error_8}</div>
                  <label htmlFor="Player1Age"> Age </label>
                  <input id="age" type="number" className="form-control" onChange={(e) => this.setPlayerDetail(e,7)}/>
                  <div className="text-danger">{this.state.error.player_age_error_8}</div>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" name="genderRadio8" id="gender"  onChange={(e) => this.setPlayerDetail(e,7)}/> Male&nbsp;
                    <input type="radio" value="Female" name="genderRadio8" id="gender" onChange={(e) => this.setPlayerDetail(e,7)} /> Female&nbsp;
                    <input type="radio" value="Other" name="genderRadio8" id="gender" onChange={(e) => this.setPlayerDetail(e,7)} /> Other&nbsp;
                  </div>
                  <div className="text-danger">{this.state.error.player_gender_error_8}</div>
                  <br/>
                </fieldset>

                <fieldset>
                  <legend> Player 10 </legend>
                  <div className="text-danger">{this.state.error.player_error_10}</div>
                  <label htmlFor="PlayerName"> Name </label>
                  <input id="playerName" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,9)}/>
                  <div className="text-danger">{this.state.error.player_name_error_10}</div>
                  <label htmlFor="PlayerEmail"> Email </label>
                  <input id="email" type="text" className="form-control" onChange={(e) => this.setPlayerDetail(e,9)}/>
                  <div className="text-danger">{this.state.error.player_email_error_10}</div>
                  <label htmlFor="PlayerAge"> Age </label>
                  <input id="age" type="number" className="form-control" onChange={(e) => this.setPlayerDetail(e,9)}/>
                  <div className="text-danger">{this.state.error.player_age_error_10}</div>
                  <label htmlFor="PlayerGender"> Gender </label>
                  <div>&nbsp;&nbsp;
                    <input type="radio" value="Male" name="genderRadio10" id="gender" onChange={(e) => this.setPlayerDetail(e,9)} /> Male&nbsp;
                    <input type="radio" value="Female" name="genderRadio10" id="gender" onChange={(e) => this.setPlayerDetail(e,9)} /> Female&nbsp;
                    <input type="radio" value="Other" name="genderRadio10" id="gender" onChange={(e) => this.setPlayerDetail(e,9)} /> Other&nbsp;
                  </div>
                  <div className="text-danger">{this.state.error.player_gender_error_10}</div>
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

const mapStateToProps = (state) => {
  return { 
      id: state.auth.id
  }
}

export default connect(mapStateToProps,{registerTeam})(CreateTeam);
