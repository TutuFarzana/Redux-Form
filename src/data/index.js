import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  name: state.reducer.name,
  age: state.reducer.age,
  email: state.reducer.email,
  phoneNumber: state.reducer.phoneNumber
});

class Data extends React.Component {
  render() {
    return (
      <div>
        <p>NAME: {this.props.name}</p>
        <p>AGE: {this.props.age}</p>
        <p>EMAIL: {this.props.email}</p>
        <p>PHONE: {this.props.phoneNumber}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Data);