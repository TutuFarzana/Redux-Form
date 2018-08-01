import React from "react";
import { connect } from "react-redux";
import { addButtonClicked } from "./actions";

let name,age,email,phno;

const mapStateToProps = state => ({
  name: state.example.name,
  age: state.example.age,
  email: state.example.email,
  phno: state.example.phno
});

const mapDispatchToProps = dispatch => ({
  addButtonClicked: () => dispatch(addButtonClicked(
    document.getElementById("name").value,
    document.getElementById("age").value,
    document.getElementById("email").value,
    document.getElementById("phno").value
  )) 
});

class Example extends React.Component {
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

        <label for="phno"><b>Mobile Number</b></label>
        <input type="number" id="phno" placeholder="Enter your mobile number" required /><br/> 
 
        <button onClick={this.props.addButtonClicked}>ADD</button>
        <br/>

        name: {this.props.name} <br/>
        age: {this.props.age} <br/>
        email: {this.props.email} <br/>
        phno: {this.props.phno} <br/>
    
      </div>
      )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Example);
