import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm';
import axios from 'axios';

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({
      user
    });
  }

  processForm(event) {
    event.preventDefault();
    const formData = {
      name: this.state.user.name,
      email: this.state.user.email,
      password: this.state.user.password
    };

    const signup = axios.post('/auth/signup', formData);
    signup
    .then(resp => {
      this.setState({
        errors: {}
      });
      console.log('Sign up successful!');
      localStorage.setItem('successMessage', resp.data.message);
      this.context.router.replace('/login');
    })
    .catch(errors => {
      errors = errors.response.data;
      this.setState({
        errors
      });
    });
  }

  render() {
    return (
      <SignUpForm 
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
};