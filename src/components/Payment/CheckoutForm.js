import React,{useState,useEffect} from 'react';
import {CardElement,useElements,useStripe}  from '@stripe/react-stripe-js';
import useAuth from './../../hooks/useAuth';
import { CircularProgress } from '@mui/material';



const CheckoutForm = ({product}) => {

    // success message
    const [success,setSuccess]=useState('')
    const {price,_id}=product;
    // error handle
    const [error,setError]=useState('');
    const [processing,setProcessing]=useState(false)

    const [clientSecret,setClientSecret]=useState('');
    const {user}=useAuth()

    
    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(!stripe || !elements ){
            return;
        }
        const card =elements.getElement(CardElement);
        if(card===null){
            return;
        }
        setProcessing(true)
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            setError(error.message);
            setSuccess('')
        }
        else{
            setError('')
            // console.log(paymentMethod);
            setProcessing(false);
          
        }

        // payment intent
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user.displayName,
                  email:user.email
                },
              },
            },
          );

          if(intentError){
              setError(intentError.message);
              setSuccess('')
          }
          else{
            setError('')
            setSuccess('You payment processed successfully')
           
              // // save to database
            const payment={
                    amount:paymentIntent.amount,
                    created: paymentIntent.created,
                    last4:paymentMethod.card.last4,
                    transaction:paymentIntent.client_secret.slice('_secret')[0]
            }
            const url=`http://localhost:5000/paymentInfo/${_id}`;
                fetch(url,{
                    method:'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(payment)
                })
                .then(res=>res.json())
          }

    }



    useEffect(()=>{
      fetch('http://localhost:5000/create-payment-intent',{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify({price})
      })
      .then(res=>res.json())
      .then(data=>setClientSecret(data.clientSecret))
  },[price])
 
  // handle price manage
  const vagPrice= parseInt(price/85)


    const stripe= useStripe()
    const elements=useElements()
    return (
        <div className='container m-3'>
             <form className='m-3' onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     {
         processing ? <CircularProgress></CircularProgress> :  <button className="m-3" type="submit" disabled={!stripe}>
         Pay ${vagPrice}
       </button>
     }
    </form>
    {
        error && <p style={{color:'#f34e4e',fontWeight:"bold"}} className='text-center'>{error}</p>
    }
    {
        success && <p style={{color:'green',fontWeight:"bold"}} className='text-center'>{success}</p>
    }
        </div>
    );
};

export default CheckoutForm;