import React from "react";
import history from '../history'

class LoanFields extends React.Component{
    Email = () => {
        history.push('/Email');
      };
    render() {
        return (
            <div>
                <center><h1>Loan Fields</h1></center>
                <h4>The field site manager can loan fields from external sources if the fields are not sufficient to conduct the matches. </h4>
                <center><h4><button onClick={() => this.Email()}>Contact Field Owners</button></h4></center>
            </div>
        )
    }
}

export default LoanFields;