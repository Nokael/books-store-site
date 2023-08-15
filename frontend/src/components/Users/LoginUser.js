import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { userLoginAction } from '../../redux/actions/users/usersActions';
import ErrorMessage from '../ErrorMessage';

const LoginUser = () => {

  const navigate = useNavigate();

  const [email, setEmail] =  useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();

  // grab pieces of data from our store
  const state = useSelector(state => {
    return state.userLogin;
  });

  const {loading, userInfo, error} = state;

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginAction(email, password))

  }

   // redirect after successful login
   useEffect(() => {
    if(userInfo) {
    navigate("/profile");

    }
   }, [userInfo, navigate])

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {loading && <h1>loading...</h1>}  {/* display loading */}
          {error && <ErrorMessage> {error} </ErrorMessage>}  {/* display error */}

          <form onSubmit={submitFormHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;