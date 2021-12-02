
import React from "react";
import { connect } from 'react-redux';

class ViewTeamDetails extends React.Component {
  
  render() {
    return (
        <div>
            <h2>
                Team Details
            </h2>
        <table>
        <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            { this.props.playerDetails.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.playerName}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                </tr>
              );
            })}
        </table>
        <br/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        teamName: state.team.team_details.team_name,
        coachId: state.team.team_details.coach_id,
        playerDetails: state.team.team_details.player_details,
        teamId: state.team.team_details.team_id,
    }
  }
  
  export default connect(mapStateToProps, null)(ViewTeamDetails);
