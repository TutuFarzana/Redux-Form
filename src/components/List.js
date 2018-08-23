import React from "react";

export default () => (
    <div>
        <h1>Registration Form</h1>

        <label>
            <b>Name</b>
        </label>
        <input type="text" id="name" placeholder="Enter your Name" required />
        <br />

        <label for="age">
            <b>Age</b>
        </label>
        <input type="number" id="age" placeholder="Enter your Age" required />
        <br />

        <label for="email">
            <b>Email</b>
        </label>
        <input type="text" id="email" placeholder="Enter Email" required />
        <br />

        <label for="phoneNumber">
            <b>Mobile Number</b>
        </label>
        <input
            type="number"
            id="phoneNumber"
            placeholder="Enter your mobile number"
            required
        />
    </div>
);
