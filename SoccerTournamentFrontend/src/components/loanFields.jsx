import React from "react";

class LoanFields extends React.Component{
    fieldowners = () => {}
    render() {
        return (
            <div>
                <h1>Loan Fields</h1>
                <p>The field site manager can loan fields from external sources if the fields are not sufficient to conduct the matches. </p>
                <button  onClick={(e) => { if (window.confirm('An email has been sent to the field owners')) this.fieldowners(e) } }>
              Contact Field Owners
            </button>
            </div>
        )
    }
}

export default LoanFields;