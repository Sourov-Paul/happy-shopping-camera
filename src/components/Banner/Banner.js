import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
import Fade from 'react-reveal/Fade';


const Banner = () => {



    return (
        <div>
            <Carousel variant="dark">
  <Carousel.Item>
  
  <img
      className="d-block w-100 "
      src="https://i.ibb.co/CQdyxZN/Photographer-taking-a-photo.jpg"
        style={{height:'80vh'}}
      alt="First slide"
    />
 
    <Carousel.Caption>
      <h5 className="h5_banner"><Fade left>Hello Everyone</Fade></h5>
      <p className="p_tag_banner"> <Fade right>You will find good cameras on this website. Cameras are much more efficient. </Fade></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  w-100 "
      src="https://i.ibb.co/Bj7VSNP/Professional-lighting-equipment-on-the-movie-set-with-smoke-in-the-air.jpg"
      style={{height:'80vh'}}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5 className="h5_banner"><Fade left>Wrold Best Camera here.</Fade></h5>
      <p className="p_tag_banner"><Fade right>You can order the camera if you want and you can order online.</Fade></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-bloc w-100"
      src="https://i.ibb.co/wCyyYY6/young-shirtless-male-with-backpack-standing-mountain-taking-picture-cloudy-sky.jpg"
      style={{height:'80vh'}}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 className="h5_banner"><Fade left> 5k+ Happy Customar</Fade></h5>
      <p className="p_tag_banner"><Fade right>5K + Happy customer, everyone likes our service very much. </Fade></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;