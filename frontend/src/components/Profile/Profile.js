import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css';
import pic from '../../assets/img/bookpic.jpg';
import { userProfileAction } from '../../redux/actions/users/usersActions';
import Loading from '../Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(userProfileAction());
    
  }, [dispatch])
  
  const userProfile = useSelector((state) => state.userProfile);
  const { loading, error, user } = userProfile;

  return (
    <>
    {error && <h3> {error} </h3> }
    {loading ? (<Loading /> ) : ( <div className='container'>
        <div className='row'>
          <div className='col mt-5'>
            <div className='card m-auto ' style={{ width: '50%' }}>
              <img src={pic} className='card-img-top' alt='...' />
              <FontAwesomeIcon icon={faUser}/>
              <div className='card-body'>
                <h5 className='card-title'>{user?.email}</h5>
                <p className='card-text'>{user?.name}</p>
                <Link to='/user-update' className='btn btn-primary'>
                  edit profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      
      {/* Table */}
      {loading ? (<Loading />) : (
        <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Author</th>
            <th scope='col'>Book Name</th>
            <th scope='col'>Delete</th>
            <th scope='col'>Update</th>
          </tr>
        </thead>
        <tbody>
          {user?.books.map(book => (
            <tr className='table-dark'>
            <th scope='row'>{book.author}</th>
            <td>{book.title}</td>
            <td>Delete</td>
            <td>Update</td>
          </tr>
          ))}
        </tbody>
      </table>
      )}
      
    </>
  );
};

export default Profile;