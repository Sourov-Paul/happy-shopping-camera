import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from './../../../hooks/useAuth';

const ResetPassword = () => {
const{resetPassword,error}=useAuth();

    const handleResetPassword=(data)=>{
       
      resetPassword(data)
        // data.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleResetPassword()}>

              <input type="email" name="" id="" />       
         <Button type="submit">Send</Button>
            </form>
            <h2>{error}</h2>
        </div>
    );
};

export default ResetPassword;