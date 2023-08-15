import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from '../../redux/actions/users/usersActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faPlus, faBook } from '@fortawesome/free-solid-svg-icons';
// import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const navigate = useNavigate();

const state = useSelector(state => {
  return state.userLogin;
});

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userLogoutAction());
    navigate("/")
  }

const {loading, userInfo, error} = state;



  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <Link className='navbar-brand' to='/'>
          NokxBooks
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
                <Link to='/#about' className='nav-link'>
                  About
                </Link>
            </li>
             {/* Login Register */}
             
             {!userInfo ? (
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
             ) : (
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/library'>
                  Library
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/addbook'>
                  Add book
                </Link>
              </li>
              
                <li className='nav-item'>
                <Link className='nav-link' to='/profile'>
                  Profile
                </Link>
              </li>
              <li className='nav-item'>
                <Link onClick={logoutHandler} className='nav-link' to='/'>
                  Logout
                </Link>
              </li>

               {/* Drop dowm */}
            {true ? (
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle btn-dark'
                  data-toggle='dropdown'
                  href='/'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'></Link>
                <div className='dropdown-menu'>
                  <Link className='dropdown-item' to='/profile'>
                    <FontAwesomeIcon icon={faUser}/>
                    Profile
                  </Link>
                  <Link className='dropdown-item' to='/addbook'>
                  <FontAwesomeIcon icon={faPlus}/>
                    Add book
                  </Link>
                  <Link className='dropdown-item' to='/library'>
                  <FontAwesomeIcon icon={faBook}/>
                    Library
                  </Link>

                  <div className='dropdown-divider'></div>
                  <Link onClick={logoutHandler} className='dropdown-item' to='/'>
                  <FontAwesomeIcon icon={faSignOutAlt}/>
                  Logout
                </Link>
                </div>
              </li>
            ) : (
              ''
            )}
             
            </>
             )}


           
          </ul>
         
        </div>
      </nav>
    </header>
  );
};

export default Navbar;