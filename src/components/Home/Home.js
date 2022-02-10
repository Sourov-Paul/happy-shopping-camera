import React from 'react';
import Header from '../Header/Header/Header';
import SectionOne from '../SectionOne/SectionOne';
import TenProduct from '../TenProduct/TenProduct';
import Banner from './../Banner/Banner';
import Footer from './../Footer/Footer';
import Ads from './../Ads/Ads';
import FacebookMessanger from '../FacebookMessanger/FacebookMessanger';
import Revew from '../Revew/Revew';
import useAuth from './../../hooks/useAuth';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    const {user}=useAuth()
    return (
        <div>
            <Header></Header>
            {
        user?.emailVerified ?"": <h6 className="sticky-top verifyWarning">
          <i id='worrning' className="fas fa-exclamation-triangle"></i>To get all the services, open an account and verify email.{ user?.email ?<a className="clickHare" href="https://mail.google.com/mail/u/0/#inbox" >Click here </a>:<Link to="login">Click here</Link>} </h6>
      
      
      }
            <Banner></Banner>
            <SectionOne></SectionOne>
            <TenProduct></TenProduct>
            <Ads></Ads>
            <Revew></Revew>
            <FacebookMessanger></FacebookMessanger>
            <Footer></Footer>
        </div>
    );
};

export default Home;