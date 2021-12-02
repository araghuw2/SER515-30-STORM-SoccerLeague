import React from "react";
import history from '../history';
import { viewVolunteers } from '../actions';
import { connect } from 'react-redux';

class ViewVolunteers extends React.Component {
  
    componentWillMount() {
        this.props.viewVolunteers();
        console.log(this.props.viewVolunteers());
      }
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
            { this.props.volunteers && this.props.volunteers.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
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
        volunteers: state.auth.volunteers,
        email: state.auth.email,
        gender: state.auth.gender,
        firstName: state.auth.firstName,
        lastName: state.auth.lastName,
    }
  }
  
  export default connect(mapStateToProps, {viewVolunteers})(ViewVolunteers);
