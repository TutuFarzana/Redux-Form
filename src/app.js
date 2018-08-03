import React from "react";
import { connect } from "react-redux";
import { formSubmitted } from "./actions";
import List from "../src/components/List";
import Data from "../src/data/index.js";
import Submit from "../src/components/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
            <Router>
                <div className="App">
                    <Link to="/DisplayForm">DisplayForm</Link>
                    <br />
                    <Link to="/ViewData">ViewData</Link>
                    <br /><br/>
                    <Submit onClick={this.props.formSubmitted} message="Submit" />
                    <br /><br/>
                    <hr />
                    <Route path="/DisplayForm" component={List} />
                    <Route path="/ViewData" component={Data} />
                </div>
            </Router>
        );
    }
}
export default connect(
    null,
    mapDispatchToProps
)(RegistrationForm);