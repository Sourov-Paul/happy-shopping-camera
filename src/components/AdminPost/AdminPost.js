import React,{useState} from 'react';
import { useRef } from 'react';
import "./AdminPost.css";
import {  Alert,AlertTitle } from '@mui/material';




const AdminPost = () => {

    
   const nameRef=useRef()
   const desRef=useRef()
   const priceRef=useRef()
   const imgRef=useRef()
 // sucess message
 const [sucess,setSucess]=useState(false)


   const handleAddProduct =e=>{

    const name=nameRef.current.value;
    const description=desRef.current.value;
    const number=priceRef.current.value;
    const img=imgRef.current.value;
    const newProduct={name,description,number,img};

    fetch('http://localhost:5000/product',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            setSucess(true)
          e.target.reset()
        }
    })
    e.preventDefault()
   }
    return (
        <div>
             <div className="main-container mt-5 mb-5">
           <div className=" container pt-5">
           
           <h2 className="text-center mt-5">Add New Product</h2>

           <form className="form mt-5" onSubmit={handleAddProduct}> 
           <span className="pro_name"><i className="fab fa-product-hunt product"></i>Product Name</span>
            <input ref={nameRef} className="item-name rounded" placeholder="Product Name" name="name" />         
             
             <span className="about"><i className="fas fa-comments comment"></i>About This item</span> 
             <input ref={desRef} className="descrip rounded" placeholder="Description"  name="description" />
            <span className="pro_price"><i className="fas fa-dollar-sign price"></i>Price</span>
              <input ref={priceRef} placeholder="Price" className="number rounded"  name="number" /> 
             <span className="Image"><i className="fas fa-images photo"></i>Photo Link</span>
             <input ref={imgRef} placeholder="Photo Link" className="imgs_link rounded"  name="img"/> 
             <input className="submitButton rounded" type="submit" value="Add"  />     
            </form>
            {
            sucess && <Alert severity="success">
            <AlertTitle>Card Posted Successfully</AlertTitle>
          </Alert>
          }
           </div>
            </div>   
        </div>
    );
};
  
export default AdminPost;