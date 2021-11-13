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
            <th>FIELD</th>
            <th>GROUP</th>

            <th></th>
          </tr>
          {this.props.scheduleData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.game_start_time}</td>
                <td>{item.game_end_time}</td>
                <td>{item.team_name_1}</td>
                <td>{item.team_name_2}</td>

                <td>{item.field_site}</td>
                <td>{item.group}</td>

                <td>
                  <button className="btn-primary btn-small">Result</button>
                </td>
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
