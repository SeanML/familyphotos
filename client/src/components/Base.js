import React from 'react';
import { Link, IndexLink } from 'react-router';

const Base = ({ children }) => {
  return (
    <div>
      <div>
        <IndexLink to='/'>Index</IndexLink>
      </div>
      <div>
        <Link to='/login'>Log in</Link>
        <Link to='/signup'>Sign up</Link>
      </div>
      {children}
    </div>
  );
};

export default Base;