import React, { Component } from "react";
import { connect } from 'react-redux';
import history from '../history';
import { selectScheduleDate } from '../actions'

class FilterDate extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '1'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault(); //For stopping the whole reload of page
        this.props.selectScheduleDate(this.state.value);
        history.push('/schedule');
    };
  
  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <h5><label for="days">Please select a day to view schedule:</label></h5>
                <br></br>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Select Day">Select Day</option>
                    <option value="1">Day 1</option>
                    <option value="2">Day 2</option>
                    <option value="3">Day 3</option>
                </select>
                
                <br></br>
                <br></br>
            <input type="submit" value="Submit"/>
            <br></br>
            <br></br>
            </form>
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
        withdraw_flag: state.auth.withdraw_flag,
        showViewButton: state.team.has_team 
    }
  }

export default connect(mapStateToProps, {selectScheduleDate})(FilterDate);
