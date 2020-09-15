import React, { Component } from "react";
import FormField from "./FormField";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";

class JoinForm extends Component {
  // initialize state to hold validity of form fields
  state = { fullname: false, email: false, password: false };

  // higher-order function that returns a state change watch function
  // sets the corresponding state property to true if the form field has no errors
  fieldStateChanged = (field) => (state) =>
    this.setState({ [field]: state.errors.length === 0 });

  // state change watch functions for each field
  emailChanged = this.fieldStateChanged("email");
  fullnameChanged = this.fieldStateChanged("fullname");
  passwordChanged = this.fieldStateChanged("password");

  render() {
    const { fullname, email, password } = this.state;

    const formValidated = fullname && email && password;

    // validation function for the fullname
    // ensures that fullname contains at least two names separated with a space
    const validateFullname = (value) => {
      const regex = /^[a-z]{2,}(\s[a-z]{2,})+$/i;
      const koreanRegex = /^[가-힣]{2,6}$/i;
      if (!regex.test(value) && !koreanRegex.test(value))
        throw new Error("Name is invalid");
    };

    return (
      <div className="body">
        <form action="/" method="POST" noValidate>
          <div>
            <FormField
              type="text"
              fieldId="fullname"
              label="Name"
              placeholder="Enter Full Name"
              validator={validateFullname}
              onStateChanged={this.fullnameChanged}
              required
            />
            <EmailField
              fieldId="email"
              label="Email"
              placeholder="Enter Email Address"
              onStateChanged={this.emailChanged}
              required
            />
            <PasswordField
              fieldId="password"
              label="Password"
              placeholder="Enter Password"
              onStateChanged={this.passwordChanged}
              thresholdLength={7}
              minStrength={3}
              required
            />
          </div>
          {formValidated && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {}}
            >
              Continue
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default JoinForm;
