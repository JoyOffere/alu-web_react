import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
      isLoggedIn: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState((prevState) => ({
      email,
      enableSubmit: email !== '' && prevState.password !== '',
    }));
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState((prevState) => ({
      password,
      enableSubmit: prevState.email !== '' && password !== '',
    }));
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleLoginSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </label>
          <input
            type="submit"
            value="Submit"
            disabled={!this.state.enableSubmit}
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  // Will be used in Task 2
};

Login.defaultProps = {
  // Will be used in Task 2
};

export default Login;