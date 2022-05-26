import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { isAuth } from '../utils/functions';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context';

function Nav() {
  const [state, setState] = useContext(UserContext);
  const history = useHistory();
  const logout = () => {
    setState({ user: {}, token: '' });
    localStorage.removeItem('auth');
    history.push('/login');
  };

  return (
    <ul className='nav border'>
      <li className='nav-item'>
        <Link className='nav-link' to='/'>
          Home
        </Link>
      </li>

      {state && state.token ? (
        <>
          <li className='nav-item'>
            <span
              onClick={logout}
              style={{ cursor: 'pointer' }}
              className='nav-link'
            >
              Logout
            </span>
          </li>
        </>
      ) : (
        <>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/register'>
              Register
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default Nav;
