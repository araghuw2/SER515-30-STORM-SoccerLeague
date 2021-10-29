import react from "react";
import React, { Component } from "react";
import { connect } from 'react-redux';
import Joi from "joi";
import { isValidElement } from "react";
import { signIn } from '../actions'
import axios from 'axios';
import history from '../history'

class MyProfile extends Component {

  createNewTeam = () => {
    history.push('/createNewTeam');
  };

  generateSchedule = () => {
    history.push('/generateSchedule');
  };
  
  render() {
    return (
        <div>
            <h2>
                My Details
            </h2>
        <table>
            <tr>
                <td>Registration Date</td>
                <td>{this.props.reg_date}</td>
            </tr>
            <tr>
                <td>Email Id</td>
                <td>{this.props.email}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{this.props.gender}</td>
            </tr>
            <tr>
                <td>First Name</td>
                <td>{this.props.first_name}</td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td>{this.props.last_name}</td>
            </tr>
        </table>
        <br/>
        <h3>
        {
        this.props.role=="TournamentManager"?
            <button onClick={() => this.generateSchedule()}>Generate Schedule</button>
        :
            <button onClick={() => this.createNewTeam()}>Create New Team</button>

        }
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { 
        role: state.auth.role,
        reg_date: state.auth.reg_date,
        email: state.auth.email,
        gender: state.auth.gender,
        first_name: state.auth.first_name,
        last_name: state.auth.last_name,
        withdraw_flag: state.auth.withdraw_flag
    }
  }

export default connect(mapStateToProps, null)(MyProfile);
