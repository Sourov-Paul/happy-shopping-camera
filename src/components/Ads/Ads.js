import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import "./Ads.css"
// import GoogleMap1 from './../GoogleMap1/GoogleMap1';
const Ads = () => {
    return (
        <div className=" m-auto main-container mt-5 ">
          <div className="container">
          <div className="row">
              <div className="text-center">
                  <h2 className="queality2">Promotion</h2>
              </div>
                <div className="col-sm-12 col-md12 col-lg-12"> <MyLineChart></MyLineChart> </div>
            </div>
          </div>
        </div>
    );
};

export default Ads;