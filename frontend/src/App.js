import logo from './logo.svg';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './components/Books/AddBooks'
// import Books from './components/Books/Book'
import Navbar from './components/Navbar/Navbar';
import RegisterUser from './components/Users/RegisterUser';
import LoginUser from './components/Users/LoginUser';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import Library from './components/Library/Library';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/addbook' Component={AddBook}/>
        <Route exact path='/library' Component={Library}/>
        <Route exact path='/user-update' Component={UpdateProfile}/>
        <Route exact path='/profile' Component={Profile}/>
        <Route exact path='/register' Component={RegisterUser}/>
        <Route exact path='/login' Component={LoginUser}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
