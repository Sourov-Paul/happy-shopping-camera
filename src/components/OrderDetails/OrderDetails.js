import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../hooks/useAuth';
import "./OrderDetails.css"
import Swal from 'sweetalert2'
// import { useState } from 'react';






const OrderDetails = (props) => {
    const {number}=props?.productDetails;

  // const [disabled,setDisabled]=useState(false)

    const{register,handleSubmit}=useForm();
  const {user}=useAuth()

const onSubmit=(e)=>{
    fetch('https://floating-peak-83103.herokuapp.com/orderDetails',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(e)
       
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
          Swal.fire({
            icon: 'success',
            title: 'Thanks For Order'
     
          })
        
        }
    })
    
}

    return (
        <div>
          
             <div>
<form className="form" onSubmit={handleSubmit(onSubmit)}> <br />
<h2 className="text-center order_NOW">Confirm Your Order</h2>
{/* <h2 className="text-center order_NOW">Module 75-3 </h2> */}

<input
  id="inputPrice"
  // onChange={getInputValue}
  {...register("price")}
  placeholder="Price"
  className="p-2 m-2 "
  defaultValue={number}
  
/>

<br />
<input
  {...register("email", { required: true })}
  placeholder="Email"
  className="p-2 m-2"
  defaultValue={user.email}
/>
<br />
<input
  {...register("number", { required: true })}
  placeholder="Contact Number"
  className="p-2 m-2"
/>

<br />
<input
  {...register("address", { required: true })}
  placeholder="Your Address"
  className="p-2 m-2"
/>
<br />

{/* {
  disabled ?    
  <input type="submit" id="submit" value="Order Now" /> 
 : <span className="amountNotMatch text-center" style={{color:"red"}}>Amount Not Match</span> 
 

} */}
  <input type="submit" id="submit" value="Order Now" /> 

</form>
        </div>
        </div>
    );
};

export default OrderDetails;