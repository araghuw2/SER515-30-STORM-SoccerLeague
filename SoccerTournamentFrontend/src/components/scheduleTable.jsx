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
            <th>ID</th>
            <th>START TIME</th>
            <th>END TIME</th>
            <th>TEAM_NAME_1</th>
            <th>TEAM_NAME_2</th>
            <th>WINNING TEAM</th>
            <th>GOALS TEAM 1</th>
            <th>GOALS TEAM 2</th>
            <th>FIELD</th>
            <th>GROUP</th>
            <th>RED CARDS TEAM1</th>
            <th>RED CARDS TEAM2</th>
            <th>YELLOW CARDS TEAM1</th>
            <th>YELLOW CARDS TEAM2</th>
            <th>INJURIES TEAM1</th>
            <th>INJURIES TEAM2</th>
          </tr>
          {this.props.scheduleData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.game_start_time}</td>
                <td>{item.game_end_time}</td>
                <td>{item.team_name_1}</td>
                <td>{item.team_name_2}</td>
                <td>{item.winning_team}</td>
                <td>{item.goals_team1}</td>
                <td>{item.goals_team2}</td>
                <td>{item.field}</td>
                <td>{item.group}</td>
                <td>{item.red_card_team1}</td>
                <td>{item.red_card_team2}</td>
                <td>{item.yellow_card_team1}</td>
                <td>{item.yellow_card_team2}</td>
                <td>{item.injuries_team1}</td>
                <td>{item.injuries_team2}</td>
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
  };
};

export default connect(mapStateToProps, { schedule })(scheduleTable);
