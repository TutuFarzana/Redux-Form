import React from "react";
import { connect } from "react-redux";
import { formSubmitted } from "./actions";

const mapStateToProps = state => ({
  name: state.reducer.name,
  age: state.reducer.age,
  email: state.reducer.email,
  phoneNumber: state.reducer.phoneNumber
});

const mapDispatchToProps = dispatch => ({
  formSubmitted: () => dispatch(formSubmitted(
    document.getElementById("name").value,
    document.getElementById("age").value,
    document.getElementById("email").value,
    document.getElementById("phoneNumber").value
  )) 
});

class RegistrationForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Registration Form</h1>
        <label><b>Name</b></label>
        <input type="text" id="name" placeholder="Enter your Name" required /><br/>

        <label for="age"><b>Age</b></label>
        <input type="number" id="age" placeholder="Enter your Age" required /><br/>

        <label for="email"><b>Email</b></label>
        <input type="text" id="email" placeholder="Enter Email" required /><br/>

        <label for="phoneNumber"><b>Mobile Number</b></label>
        <input type="number" id="phoneNumber" placeholder="Enter your mobile number" required /><br/> 
 
        <button onClick={this.props.formSubmitted}>ADD</button>
        <br/>

        name: {this.props.name} <br/>
        age: {this.props.age} <br/>
        email: {this.props.email} <br/>
        Phone Number: {this.props.phoneNumber} <br/>
    
      </div>
      )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);