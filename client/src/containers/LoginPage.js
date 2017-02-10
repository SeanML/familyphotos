import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import axios from 'axios';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';
    if(storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(event) {
    event.preventDefault();
    const formData = {
      email: this.state.user.email,
      password: this.state.user.password
    };

    const login = axios.post('/auth/login', formData);
    login
    .then(resp => {
      this.setState({
        errors: {}
      });
      console.log('Logged in successfully!');
      Auth.authenticateUser(resp.data.token);
      this.context.router.replace('/');
    })
    .catch(errors => {
      errors = errors.response.data ? errors.response.data : {};
      errors.summary = errors.response.data.message;
      this.setState({
        errors
      });
    });
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({
      user
    });
  }

  render() {
    return (
      <LoginForm 
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
};