import  React,{useState} from 'react';
import {Button, CircularProgress,Box} from '@mui/material';
import {NavLink,useLocation,useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import useAuth from './../../../hooks/useAuth';
import './Login.css'
import Header from './../../Header/Header/Header';
import Swal from 'sweetalert2';
const Login = () => {

    const[loginInfo,setLoginInfo]=useState({})
    const{loding,loginUser,error,handleFacebookSignIn}=useAuth();
    // redirect after login
    const location=useLocation();
    const history=useHistory();
    // onblur change
    const handleOnBlur=data=>{
        const field=data.target.name;
        const value=data.target.value;
        const newLoginData={...loginInfo};
        newLoginData[field]=value;
        setLoginInfo(newLoginData)
    }

   
    // Submit form
    const handleLogSubmite=data=>{
        loginUser(loginInfo.email,loginInfo.password,location,history)
        data.preventDefault()
    }

// sucess message
    const errorMessageLogin=()=>{
      Swal.fire({
        icon: 'Error',
      title: 'Opps..',
      text: 'Something went wrong! Try Again'
          })    
}

    return (
      <div className='container'>
        <Header></Header>
        <h1 className="text-center">Login</h1>
        <Container className="main-form">
          <form  autocomplete="off" onSubmit={handleLogSubmite}>


            <span className="email"> <i className="far fa-envelope emails"></i>Email</span> <br />
            <input  autoComplete="off"  required onBlur={handleOnBlur} type="email" name="email" id="" /> <br />
            <span className="password"><i className="fas fa-unlock-alt pass"></i>Password</span> <br />
            <input  autocomplete='new-password' required onBlur={handleOnBlur} type="password" name="password" id="" /> <br />
            <Button className="loginButton" type="submit">Login</Button> <br />
            <NavLink className="newAcco" to="/register" style={{textDecoration:'none',cursor:"pointer"}} > <i className="fas fa-user-circle account"></i>Create New Account!</NavLink>
            {
            loding &&  <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          }
            
           {
             error && errorMessageLogin()
          } <br />
          <Button onClick={handleFacebookSignIn}><i class="fab fa-facebook facebook"></i>Login With Facebook</Button>
          </form>
        
        </Container>
      </div>
    );
};

export default Login;