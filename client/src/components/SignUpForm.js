import React from 'react';
import { Link } from 'react-router';

const SignUpForm = ({ onSubmit, onChange, errors, user }) => {
  return (
    <div>
      <form action='/' onSubmit={onSubmit}>
        <h2>Sign Up for LesterBook</h2>
        {errors.summary && <p>{errors.summary}</p>}
        <input type='text' onChange={onChange} name='name' value={user.name} placeholder='Name' />
        <input type='email' onChange={onChange} name='email' value={user.email} placeholder='Email' />
        <input type='password' onChange={onChange} name='password' value={user.password} placeholder='Password' />
        <button type='submit'>Create New Account</button>
        <Link to={'/login'}>Already have an account? Log in</Link>
      </form>
    </div>
  );
};

export default SignUpForm;