import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../hooks/useAuth';
import "./Header.css"
import HeadShake from 'react-reveal/HeadShake';
import Jello from 'react-reveal/Jello';

const Header = () => {
    const {user,logOut}= useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand  href="#home"><span ><Jello>Happy Shopping </Jello></span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link   style={{color:'white'}} as={HashLink} to="/home"><HeadShake>Home</HeadShake></Nav.Link>
                        <Nav.Link   style={{color:'white'}} as={HashLink} to="/explore"><HeadShake>More Item</HeadShake></Nav.Link>

                 {
                     user.emailVerified ?<Nav.Link   style={{color:'white'}} as={HashLink} to="/dashboard"><HeadShake>Dashboard</HeadShake></Nav.Link>:''

                 }       
                        
                        <Nav.Link   style={{color:'white'}} as={HashLink} to="/#10item" ><HeadShake>Details</HeadShake></Nav.Link>
                        <Nav.Link   style={{color:'white'}} as={HashLink} to="/#review" ><HeadShake> Review</HeadShake></Nav.Link>
                    {
                        user?.email ? <Button className="logInOut" onClick={logOut} style={{marginLeft:'10px',border:'1px solid red',color:'white',background:'tomato'}}>Logout <i style={{color:'white'}} className="fas fa-sign-out-alt"></i></Button>  :<Nav.Link className="logInOut" style={{border:'1px solid green',color:'white',background:'green',marginLeft:'10px'}} as={HashLink} to="/login"><i style={{color:'white'}} className="fas fa-sign-in-alt"></i>Login</Nav.Link>
                                                
                    }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;