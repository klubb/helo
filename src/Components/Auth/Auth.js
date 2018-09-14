import React, { Component } from "react";
import axios from "axios";
import {connect} from 'react-redux'
import {auth} from '../../ducks/reducer'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRegister = () => {
      let obj = {
          username: this.state.username,
          password: this.state.password,
          img: `https://robohash.org/${this.state.username}`
      }
    axios
      .post(`/api/create`, obj)
      .then((res) => {
          const {id, username, profile_pic} = res.data
        this.props.auth(id, username, profile_pic)
        return this.props.history.push("/dashboard");
      });
  };

  handleLogin = () => {
    axios
      .post(`/api/login`, {
        username: this.state.username,
        password: this.state.password
      })
      .then((res) => {
        const {id, username, profile_pic} = res.data
        this.props.auth(id, username, profile_pic)
        return this.props.history.push("/dashboard");

      });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          name="username"
          placeholder="username"
          type="text"
        />
        <input
          onChange={this.handleChange}
          name="password"
          placeholder="password"
          type="text"
        />

        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}

export default connect(null, {auth})(Auth);
