import React,{useState} from 'react';
import { Button} from '@mui/material';
import useAuth from './../../hooks/useAuth';
import Swal from 'sweetalert2';

const CreateAdmin = () => {
    const[email,setEmail]=useState('');
    // sucess message
    const [sucess,setSucess]=useState(false)
    // token with verify user
    const {token}=useAuth()
    const [error,setError]=useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value);
        e.preventDefault()
    }


    const handleAdminSubmit=e=>{
        const user={email};
        // handle admin 
        fetch('https://floating-peak-83103.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())

        .then(data=>{
       if(data.modifiedCount){
           setSucess(true)
           e.target.reset()
       }
       else{
        setError(true)
       }
        })
      

        e.preventDefault()
    }
    const succeessMessage=()=>{
          Swal.fire({
           
                icon: 'success',
                title: 'Admin added Successfully',
              
              })    
    }

    const errorHandle=()=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Try Again'
          })
    }


    return (
        <div className="container w-25">
            
            <form  onSubmit={handleAdminSubmit}>
                <strong><i style={{color:'green',margin:2}} className="fas fa-at"></i>Email Only</strong> <br />
                 <input placeholder="Type only users Email" onBlur={handleOnBlur} type="email" name="" id="" /> <br />
                <Button variant="contained" type="submit">Create Admin</Button>
            </form>
            {
                sucess && succeessMessage()
         
          }
          {
              error && errorHandle()
          }
         
        </div>
    );
};

export default CreateAdmin;