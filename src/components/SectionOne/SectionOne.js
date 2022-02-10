import React from 'react';
import "./SectionOne.css"
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';



const  SectionOne = () => {
    return (
        <div id='10item' className="background mt-5 ">
            <div className="container p-2">
            <div className="row mt-4">
                <h3 className='text-center mt-4 ' >Details</h3>           
            <Fade left big> <div className=" col-sm-12 col-md-6 col-lg-6 mt-5"><img className="onesidegirl img-fluid " src="https://i.ibb.co/rm6yJXW/yonger-girl2222-removebg-preview.png" alt="" /></div></Fade>
              <div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 mt-md-2"> <Swing><p className="paragraph"> <span className="cletter">F</span>irmwares' resolution selector allows the user to optionally lower the resolution, to reduce the file size per picture and extend lossless digital zooming. The bottom resolution option is typically 640×480 pixels (0.3 Megapixels).The resolution of a digital camera is often limited by the image sensor that turns light into discrete signals. The brighter the image at a given point on the sensor, the larger the value that is read for that pixel.The two major types of digital image sensor are CCD and CMOS. A CCD sensor has one amplifier for all the pixels, while each pixel in a CMOS active-pixel sensor has its own amplifier</p></Swing></div>
          </div>
            </div>
        </div>
    );
};

export default SectionOne;