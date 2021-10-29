
import React from "react";
import { connect } from 'react-redux';

class ViewTeamDetails extends React.Component {
  state = {
    account: { username: "", password: "" },
    error: {},
  };
  
  render() {
    return (
        <div>
            <h2>
                Team Details
            </h2>
        <table>
        <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
        </table>
        <br/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { 
        gender: state.auth.gender,
        first_name: state.auth.first_name,
        last_name: state.auth.last_name,
        age: state.auth.age
    }
  }
  
  export default connect(mapStateToProps, null)(ViewTeamDetails);
