import React from 'react';
import { Link } from 'react-router';

const LoginForm = ({ onSubmit, onChange, errors, successMessage, user }) => {
  return (
    <div>
      <form action='/' onSubmit={onSubmit}>
        <h2>Login</h2>

        {successMessage && <p>{successMessage}</p>}
        {errors.summary && <p>{errors.summary}</p>}

        <input type='email' onChange={onChange} name='email' value={user.email} placeholder='Email' />
        <input type='password' onChange={onChange} name='password' value={user.password} placeholder='Password' />
        <button type='submit'>Log in</button>
        <Link to={'/signup'}>Don't have an account? Create one</Link>
      </form>
    </div>
  );
};

export default LoginForm;