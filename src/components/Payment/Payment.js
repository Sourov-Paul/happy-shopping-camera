import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise=loadStripe('pk_test_51JxAeTBu9KImWXCT9Kx82hAHsVZONxt3ZmEERw5nB5ZE3AB1XvPA7QeN3Hygwfw2fiSOmePdSXa7PaQ5eWpsRVN600uSWSMupF')



const Payment = () => {

    const {productId}=useParams();
    
    const [product,setProduct]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/paymentInfo/${productId}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[productId]);

    return (
        <div>
            <h1 className="text-center">
                <i className="fab fa-amazon-pay"></i> 
               ment Method    </h1>
              {
                  product?.price &&  <Elements stripe={stripePromise}>
                  <CheckoutForm key={product._id} product={product}/>
                    </Elements>
              }
        </div>
    );
};
   
export default Payment;