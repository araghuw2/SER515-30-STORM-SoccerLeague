import React from "react";
import { connect } from 'react-redux';

class ViewVolunteers extends React.Component {
  
  render() {
    return (
        <div>
            <h2>
                Volunteers List            
            </h2>
        <table>
        <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
        </table>
        <br/>
      </div>
    );
  }
}
  
export default ViewVolunteers;
