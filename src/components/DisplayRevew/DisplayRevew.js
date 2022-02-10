import React,{useEffect,useState} from 'react';
import Rating from 'react-rating';
import "./DisplayRevew.css"
const DisplayRevew = () => {

        
        // const date=new Date().toLocaleDateString();
        const[revews,setRevews]=useState([]);

        useEffect(()=>{
            // fetch('https://floating-peak-83103.herokuapp.com/revew')
            fetch('https://floating-peak-83103.herokuapp.com/revew')
            .then(res=>res.json())
            .then(data=>setRevews(data))
        },[]);

    return (
        <div> <h5 style={{marginLeft:'15px'}} className="cmnt">Comments</h5>
           {
               revews?.map(revew=>(
                   <div className="div1"> 
                   <div className="div2"> <li style={{listStyle:'none'}}><h4 className="userName">{revew.name}</h4></li>
                  
                   <i className="gmails fas fa-at"></i><small  className="m-2 userGmail2">{revew.email}</small>
                  
                  <br/> 
                  <p className='comment-description m-1'>{revew.description}</p>
                  
                  <Rating
                  className="reting "
                   size={40}
                    initialRating={revew.number}
                    emptySymbol="far fa-star 'red'"
                    fullSymbol="fas fa-star icon-color2"
                    readonly></Rating>
                   </div></div>
               ))
           }
       
            
        </div>
    );
};

export default DisplayRevew;