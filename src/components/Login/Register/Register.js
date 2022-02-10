import  React,{useState} from 'react';
import {Container,Button, CircularProgress,Box} from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import Header from './../../Header/Header/Header';
import Swal from 'sweetalert2'

const Register = () => {

    const[registationInfo,setRegistationInfo]=useState({})


    const{user,registerUser,loding,regError}=useAuth()



    // onblur change
    const handleOnBlur=data=>{
        const field=data.target.name;
        const value=data.target.value;
        const newLoginData={...registationInfo};
        newLoginData[field]=value;
        setRegistationInfo(newLoginData)
    }

    // Submit form
    const handleLogSubmite=data=>{
        if(registationInfo.password !==registationInfo.password2){
          Swal.fire({
          
            icon: 'error',
            title: 'Password does not match',
           
          })
             return
        }
        registerUser(registationInfo.email,registationInfo.password)
        data.preventDefault()
    }

    // sucess message
    const succeessMessageSender=()=>{
      Swal.fire({
       
            icon: 'success',
            title: 'Registration Successfully',    
            text:'Please Verify Your Email',
          })
}
// error message
const errorHandleMessage=()=>{
  Swal.fire({
      icon: 'Error',
      title: 'Oops...',
      text: 'Something went wrong! Try Again'
    })
}
    return (
      <Container>
        <Header></Header>
        <h1 className="text-center">Registration Form</h1>
        <div className="main-form ">
         {!loding && <form onSubmit={handleLogSubmite}>


            <span className="email">Email</span> <br />
            <input  autocomplete="off" placeholder='Email' required onBlur={handleOnBlur} type="email" name="email" id="" /> <br />
            <span className="password">Password</span> <br />
            <input  autocomplete="off" placeholder="Password" required onBlur={handleOnBlur} type="password" name="password" id="" /> <br />
            <span className="password2">Re-Password</span> <br />
            <input  autocomplete="off" placeholder="Password" required onBlur={handleOnBlur} type="password" name="password2" id="" /> <br />
            <Button type="submit">Register</Button> <br />
            <NavLink to="/login" style={{textDecoration:'none',cursor:"pointer"}} ><Button>Already Registered </Button></NavLink>
          </form>}
         <div className="App">
         {
            loding &&  <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          }
          {
            user?.email && succeessMessageSender()
          }
          {
             regError && errorHandleMessage()
          }
         
         </div>
        </div>
      </Container>
    );
};

export default Register;