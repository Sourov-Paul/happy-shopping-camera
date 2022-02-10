import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './ControleOrder.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';




const ControleOrders = () => {


    const [orderPerson, setOrderPerson] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/orderDetails")
        .then(res=>res.json())
        .then(data=>setOrderPerson(data))
    },[ ])


    const handleDelete=id=>{

        const url=`http://localhost:5000/orderDetails/${id}`
    
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            
            if(data.deletedCount){
              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
                const matchingId=orderPerson.filter(orderData=>orderData._id !==id)
            setOrderPerson(matchingId)
             }
            
        })
    }




    return (
        <div>
         <Table className="table table-striped table-hover" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact Num:</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        {orderPerson?.map((orderInfo, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{orderInfo?.name}</td>
              <td>{orderInfo?.email}</td>
              <td>{orderInfo?.address}</td>
              <td>{orderInfo?.number}</td>
              <td>{orderInfo?.payment ? "Paid"
              : <Link to={`/dashboard/payment/${orderInfo._id}`}>
                <Button>Pay</Button></Link>
              }</td>
              
              <td><button onClick={()=>handleDelete(orderInfo._id)} className="btn button delete-order-btn p-2"><i className="far fa-trash-alt delete m-2"></i>Delete Order</button></td>
 
             </tr>
          </tbody>
        ))}
      </Table>
        </div>
    );
};

export default ControleOrders;

