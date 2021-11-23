import React from "react";
import history from '../history';

class AddVolunteers extends React.Component{
    state = {
        account: { first_name: "", last_name: "", email: "", gender:""},
        error: {},
      };
      
      validate = () => {
        let account = this.state.account;
        let isValid = true;
        let error = {};
        if(!account["first_name"])
        {
          isValid = false;
          error["first_name"] = "Firstname is mandatory";
        }
        if(!account["last_name"])
        {
          isValid = false;
          error["last_name"] = "Lastname is mandatory";
        }
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
          account["first_name"]="";
          account["last_name"]="";
          account["email"]="";
          account["gender"]="";
          this.setState({account:account});
        }
    
    
        console.log("Submitteed");
      };
    
    render() {
        return (
            <div><h1><center>Add Volunteers</center></h1>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label><b>First Name*</b></label>
                <input type="text" className="form-control" onChange={this.handleChangeFirstName} />
                <div className="text-danger">{this.state.error.first_name}</div>
            </div>

            <div className="form-group">
                <label><b>Last Name*</b></label>
                <input type="text" className="form-control" onChange={this.handleChangeLastName} />
                <div className="text-danger">{this.state.error.last_name}</div>
            </div>

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

export default AddVolunteers;