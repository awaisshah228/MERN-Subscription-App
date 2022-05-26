import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul class='nav border'>
      <li class='nav-item'>
        <Link class='nav-link' to='/'>
          Home
        </Link>
      </li>
      <li class='nav-item'>
        <Link class='nav-link' to='/login'>
          Login
        </Link>
      </li>
      <li class='nav-item'>
        <Link class='nav-link' to='/register'>
          Register
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
