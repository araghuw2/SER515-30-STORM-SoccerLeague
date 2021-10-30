
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
                  <td>{item.name}</td>
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
        teamName: state.team.team_name,
        coachId: state.team.coach_id,
        playerDetails: state.team.player_details,
        teamId: state.team.team_id,
    }
  }
  
  export default connect(mapStateToProps, null)(ViewTeamDetails);
