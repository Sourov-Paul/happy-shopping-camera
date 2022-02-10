import React,{useState} from 'react';
import "./Revew.css"
import { useForm } from 'react-hook-form';
import DisplayRevew from '../DisplayRevew/DisplayRevew';
import Wobble from 'react-reveal/Wobble';
import Swal from 'sweetalert2'




const Revew = () => {

  
     // sucess message
 const [setSucess]=useState(false)

  const {
    register,
    handleSubmit,
  
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/revew", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(data=>{
        if(data.insertedId){
            setSucess(true);
            Swal.fire({
              icon: 'success',
              title: 'Added Successfully'
       
            })
        
        }
    })

  };
  return (
    <div >
              <DisplayRevew></DisplayRevew>

      <div id="review">
       <Wobble>
        <h1 className="mt-5 text-center text-success">User Revew</h1>
        <div className=" w-50 m-auto mt-5">
      
     
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                required
                  {...register("name")}
                  placeholder="Your Name"
                  className="p-2 m-2 w-100 input-field  rounded"
                />
                <input
                  {...register("email")}
                required
                  type="email"
                  placeholder="Your Email"
                  className="p-2 m-2 w-100 input-field  rounded"
                />

                <input
                required

                  {...register("description")}
                  placeholder="Your Message"
                  className="p-2 m-2 w-100 input-field  rounded"
                />

                <input
               
                 step="1" min="0" max="5"
                  {...register("number", { required: true })}
                  placeholder="Reting"
                  type="number"
                  className="p-2 m-2 w-100 input-field  rounded"
                />

              
                <input
                
                  type="submit"
                  value="Post"
                  className="btn btn-success w-100 rounded"
                />
              </form>
             
            </div>
            </Wobble>
          </div>
    
    </div>
  );
        
    
};
  
export default Revew;