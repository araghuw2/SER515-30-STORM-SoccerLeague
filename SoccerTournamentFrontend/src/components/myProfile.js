import React, { Component } from "react";
import { connect } from 'react-redux';
import history from '../history';
import { viewTeam } from '../actions'

class MyProfile extends Component {

    componentWillMount() {
        this.props.viewTeam(this.props.id);
    }

  createNewTeam = () => {
    history.push('/createNewTeam');
  };
  generateSchedule = () => {
    history.push('/generateSchedule');
  };

  viewTeam = () => {
    history.push('/viewteamdetails');
  };

  loanFields = () => {
    history.push('/loanFields');
  };
  
  render() {
    return (
        <div>
            <h2>
                My Details
            </h2>
        <table>
            <tr>
                <td>Role</td>
                <td>{this.props.role}</td>
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
          <div>
            {(() => {

          switch(this.props.role.toLowerCase()){
            case 'coach':
              return (<div><button onClick={() => this.createNewTeam()}>Create New Team</button>
              <button onClick={() => this.viewTeam()}>View My Team</button></div>)
            case 'tournamentManager':
              return (<div><button onClick={() => this.generateSchedule()}>Generate Schedule</button></div>)
            
            case 'field site manager':
              return (<div><button onClick={() => this.loanFields()}>Loan Fields</button></div>)

            default : 
              return (<div> Nothing </div>)
          }
        })()}
        </div>
        }     
        </h3>
          
        {/* // this.props.role=="TournamentManager"?
        //     <button onClick={() => this.generateSchedule()}>Generate Schedule</button>
        // :
        //     <button onClick={() => this.createNewTeam()}>Create New Team</button>

        // }

        <h3>
            <button onClick={() => this.viewTeam()}>View My Team</button>
        </h3>  */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { 
        id: state.auth.id,
        role: state.auth.role,
        reg_date: state.auth.reg_date,
        email: state.auth.email,
        gender: state.auth.gender,
        first_name: state.auth.first_name,
        last_name: state.auth.last_name,
        withdraw_flag: state.auth.withdraw_flag
    }
  }

export default connect(mapStateToProps, {viewTeam})(MyProfile);
