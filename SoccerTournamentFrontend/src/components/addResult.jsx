import React, { Component } from "react";
import { connect } from 'react-redux';
import { submitGameDetails } from "../actions";

class AddResult extends Component {

  state = {
    gameDetails: { 
      winning_team: "", 
      goals_team1: "", 
      goals_team2: "", 
      red_cards_team1: "", 
      red_cards_team2:"", 
      yellow_cards_team1:"", 
      yellow_cards_team2:"",
      injuries_team1:"",
      injuries_team2:"",
    },
    error: {},
  };

  handleChangeWinningTeam = (e) => {
    const gameDetails = { ...this.state.gameDetails };
    gameDetails.winning_team = e.currentTarget.value;
    this.setState({ gameDetails });
  };

  handleChangeGoalsTeam1 = (e) => {
    const gameDetails = { ...this.state.gameDetails };
    gameDetails.goals_team1 = e.currentTarget.value;
    this.setState({ gameDetails });
  };

  handleChangeGoalsTeam2 = (e) => {
    const gameDetails = { ...this.state.gameDetails };
    gameDetails.goals_team2 = e.currentTarget.value;
    this.setState({ gameDetails });
  };

  handleChangeYellowCardsTeam1 = (e) => {
    const gameDetails = { ...this.state.gameDetails };
    gameDetails.yellow_cards_team1 = e.currentTarget.value;
    this.setState({ gameDetails });
  };

  handleChangeYellowCardsTeam2 = (e) => {
    const gameDetails = { ...this.state.gameDetails };
    gameDetails.yellow_cards_team2 = e.currentTarget.value;
    this.setState({ gameDetails });
  };

  handleChangeRedCardsTeam1 = (e) => {
    const gameDetails = { ...this.state.gameDetails };
    gameDetails.red_cards_team1 = e.currentTarget.value;
    this.setState({ gameDetails });
  };

  handleChangeRedCardsTeam2 = (e) => {
    const gameDetails = { ...this.state.gameDetails };
    gameDetails.red_cards_team2 = e.currentTarget.value;
    this.setState({ gameDetails });
  };

  handleChangeInjuriesTeam1 = (e) => {
    const gameDetails = { ...this.state.gameDetails };
    gameDetails.injuries_team1 = e.currentTarget.value;
    this.setState({ gameDetails });
  };

  handleChangeInjuriesTeam2 = (e) => {
    const gameDetails = { ...this.state.gameDetails };
    gameDetails.injuries_team2 = e.currentTarget.value;
    this.setState({ gameDetails });
  };

  submitResult = () => {
    this.props.submitGameDetails(this.props.id, this.state.gameDetails);
  };
  
  render() {
    return (
        <div>
          <br/>
            <h3>Add Winner Details to Game ID - {this.props.gameId}</h3>
            <table>
          <tr>
            <th></th>
            <th>Enter Values</th>
          </tr>
          <tr>
            <th>WINNING TEAM</th>
            <th>
            <input
              autoFocus
              value={this.state.gameDetails.winning_Team}
              onChange={this.handleChangeWinningTeam}
              id="winningTeam"
              type="text"
              className="form-control"/>
              </th>
          </tr>
          <tr>
            <th>GOALS TEAM 1</th>
            <th>
            <input
              autoFocus
              value={this.state.gameDetails.goals_Team1}
              onChange={this.handleChangeGoalsTeam1}
              id="goalsTeam1"
              type="text"
              className="form-control"/>
              </th>
          </tr>
          <tr>
            <th>GOALS TEAM 2</th>
            <th>
            <input
              autoFocus
              value={this.state.gameDetails.goals_Team2}
              onChange={this.handleChangeGoalsTeam2}
              id="goalsTeam2"
              type="text"
              className="form-control"/>
              </th>
          </tr>
          <tr>
            <th>RED CARDS TEAM 1</th>
            <th>
            <input
              autoFocus
              value={this.state.gameDetails.red_Cards_Team1}
              onChange={this.handleChangeRedCardsTeam1}
              id="redCardsTeam1"
              type="text"
              className="form-control"/>
              </th>
          </tr>
          <tr>
            <th>RED CARDS TEAM 2</th>
            <th>
            <input
              autoFocus
              value={this.state.gameDetails.red_Cards_Team2}
              onChange={this.handleChangeRedCardsTeam2}
              id="redCardsTeam2"
              type="text"
              className="form-control"/>
              </th>
          </tr>
          <tr>
            <th>YELLOW CARDS TEAM 1</th>
            <th>
            <input
              autoFocus
              value={this.state.gameDetails.yellow_Cards_Team1}
              onChange={this.handleChangeYellowCardsTeam1}
              id="yellowCardsTeam1"
              type="text"
              className="form-control"/>
              </th>
          </tr>
          <tr>
            <th>YELLOW CARDS TEAM 2</th>
            <th>
            <input
              autoFocus
              value={this.state.gameDetails.yellow_Cards_Team2}
              onChange={this.handleChangeYellowCardsTeam2}
              id="yellowCardsTeam2"
              type="text"
              className="form-control"/>
              </th>
          </tr>
          <tr>
            <th>INJURIES TEAM 1</th>
            <th>
            <input
              autoFocus
              value={this.state.gameDetails.injuries_Team1}
              onChange={this.handleChangeInjuriesTeam1}
              id="injuriesTeam1"
              type="text"
              className="form-control"/>
              </th>
          </tr>
          <tr>
            <th>INJURIES TEAM 2</th>
            <th>
            <input
              autoFocus
              value={this.state.gameDetails.injuries_Team2}
              onChange={this.handleChangeInjuriesTeam2}
              id="injuriesTeam2"
              type="text"
              className="form-control"/>
              </th>
          </tr>         
        </table>
        <br/>
        <h3><button onClick={() => this.submitResult()} className="btn-primary btn-small">Submit Game Details</button>
        </h3>
        <br/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { 
        id: state.schedule.selected_game_id
    }
  }

export default connect(mapStateToProps, {submitGameDetails})(AddResult);
