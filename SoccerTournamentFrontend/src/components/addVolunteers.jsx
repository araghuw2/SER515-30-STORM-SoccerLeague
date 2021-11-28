import React from "react";
import history from '../history';
import { addVolunteers } from '../actions';
import { connect } from 'react-redux';


class AddVolunteers extends React.Component{
    state = {
        account: { volunteerName: "", email: "", gender:""},
        error: {},
      };
      
      validate = () => {
        let account = this.state.account;
        let isValid = true;
        let error = {};
        if(!account["volunteerName"])
        {
          isValid = false;
          error["volunteerName"] = "Firstname is mandatory";
        }
        // if(!account["last_name"])
        // {
        //   isValid = false;
        //   error["last_name"] = "Lastname is mandatory";
        // }
        if(!account["email"])
        {
          isValid = false;
          error["email"] = "Email is mandatory";
        }
        if(!account["gender"])
        {
          isValid = false;
          error["gender"] = "Choosing an option is mandatory";
        }
        this.setState({
          error:error
        });
        return isValid;
      };
      handleSubmit = (e) => {
        e.preventDefault(); //For stopping the whole reload of page
        const error = this.validate();
    
        console.log(error);
    
        if(error)
        {
          let account = {};
          account["volunteerName"]="";
          //account["last_name"]="";
          account["email"]="";
          account["gender"]="";
          this.setState({account:account});
        }
    
        this.props.addVolunteers(this.state.account)
        console.log("Submitteed");
      };

      handleChangeVolunteerName = (e) => {
        const account = { ...this.state.account };
        account.volunteerName = e.currentTarget.value;
        this.setState({ account });
      };
    
      // handleChangeLastName = (e) => {
      //   const account = { ...this.state.account };
      //   account.last_name = e.currentTarget.value;
      //   this.setState({ account });
      // };
    
      handleChangeEmail = (e) => {
        const account = { ...this.state.account };
        account.email = e.currentTarget.value;
        this.setState({ account });
      };
      
      handleChangeGender = (e) => {
        const account = { ...this.state.account };
        account.gender = e.currentTarget.value;
        this.setState({ account });
      };
    
    render() {
        return (
            <div><h1><center>Add Volunteers</center></h1>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label><b>First Name*</b></label>
                <input type="text" className="form-control" onChange={this.handleChangeVolunteerName} />
                <div className="text-danger">{this.state.error.volunteerName}</div>
            </div>

            {/* <div className="form-group">
                <label><b>Last Name*</b></label>
                <input type="text" className="form-control" onChange={this.handleChangeLastName} />
                <div className="text-danger">{this.state.error.last_name}</div>
            </div> */}

            <div className="form-group">
                <label><b>Email Address*</b></label>
                <input type="email" className="form-control" onChange={this.handleChangeEmail}/>
                <div className="text-danger">{this.state.error.email}</div>
            </div>

            <label><b> Gender*</b> </label>
            <div className="text-danger">{this.state.error.gender}</div>
            <div className="radio">
              <label>
              <input 
                value="male"
                name="gender"
                type="radio"
                onChange={this.handleChangeGender}
              />
              Male
              </label>
              </div>
              <div className="radio">
              <label>
              <input 
                value="female"
                name="gender"
                type="radio"
                onChange={this.handleChangeGender}
              />
              Female 
              </label>

              </div>
              <div className="radio">
              <label>
              <input 
                value="prefer not to say"
                name="gender"
                type="radio"
                onChange={this.handleChangeGender}
              />
              Prefer not to say
              </label>
            </div>
          <button className="btn btn-primary m-2">Add</button>
            
        </form>
            </div>
        );
      }
}

const mapStateToProps = (state) => {
  return { 
      email: state.auth.email,
      gender: state.auth.gender,
      volunteerName: state.auth.volunteerName,
      //last_name: state.auth.last_name,
  }
}

export default connect(mapStateToProps, {addVolunteers})(AddVolunteers);

//export default AddVolunteers;