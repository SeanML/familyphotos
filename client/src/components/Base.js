import React from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';

const Base = ({ children }) => {
  return (
    <div>
      <div>
        <IndexLink to='/'>Index</IndexLink>
      </div>
      {Auth.isUserAuthenticated() ? (
        <div>
          <Link to='/logout'>Log out</Link>
        </div>
      ) : (
        <div>
          <Link to='/login'>Log in</Link>
          <Link to='/signup'>Sign up</Link>
        </div>
      )}
      
      {children}
    </div>
  );
};

export default Base;