import React from "react";
import { connect } from "react-redux";
import { schedule } from "../actions";
class scheduleTable extends React.Component {
  componentWillMount() {
    this.props.schedule();
  }

  render() {
    return (
      <div>
        <h1>Game Schedules</h1>
        <table>
          <tr>
            <th>START TIME</th>
            <th>END TIME</th>
            <th>TEAM 1</th>
            <th>TEAM 2</th>
            <th>FIELD</th>
            {
              this.props.scheduleData.winning_team!=null?
              <div>
                  <th>WINNING TEAM</th>
                  <th>GOALS TEAM 1</th>
                  <th>GOALS TEAM 2</th>
                  <th>GROUP</th>
                  <th>RED CARDS TEAM1</th>
                  <th>RED CARDS TEAM2</th>
                  <th>YELLOW CARDS TEAM1</th>
                  <th>YELLOW CARDS TEAM2</th>
                  <th>INJURIES TEAM1</th>
                  <th>INJURIES TEAM2</th>
              </div>
              :
              ""
            }
            { this.props.role=="TournamentManager"?
                  <th>Enter Winner Details</th>
                  :
                  ""
            }
          </tr>
          {this.props.scheduleData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.game_start_time}</td>
                <td>{item.game_end_time}</td>
                <td>{item.team_name_1}</td>
                <td>{item.team_name_2}</td>
                <td>{item.field_site}</td>
                {
                  item.winning_team!=null?
                  <div>
                    <td>{item.winning_team}</td>
                    <td>{item.goals_team1}</td>
                    <td>{item.goals_team2}</td>
                    <td>{item.group}</td>
                    <td>{item.red_card_team1}</td>
                    <td>{item.red_card_team2}</td>
                    <td>{item.yellow_card_team1}</td>
                    <td>{item.yellow_card_team2}</td>
                    <td>{item.injuries_team1}</td>
                    <td>{item.injuries_team2}</td>
                  </div>
                  :
                  ""
                }

                { this.props.role=="TournamentManager" && item.winning_team==null?
                    <td>
                      <button className="btn-primary btn-small">Add Result</button>
                    </td>
                  :
                  ""
                }
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scheduleData: state.schedule.schedule,
    role: state.auth.role,
  };
};

export default connect(mapStateToProps, { schedule })(scheduleTable);
