import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import * as RiIcons  from "react-icons/ri";
import * as IoIcons  from "react-icons/io";
import {
    Link
} from "react-router-dom";

import Login from "../Login/Login";
import Signup from "../Login/Signup";
import LogOut from "../Login/LogOut";


function NavbarUI(props){
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isLogOut,setIsLogOut] = useState(false);

    const [pageOffset, setPageOffset] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setPageOffset(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
        return (
            <div>
                <Navbar style={{ background: pageOffset >= 370 ? "#000000" : "transparent", color: pageOffset <= 648 ? "#000000" : "#ffffff"}} expand="lg" className="fixed-top">
                    <Container>
                        <Navbar.Brand href="#home" className="text-white"><h3>HamroVet</h3></Navbar.Brand>
                        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto">
                        <Link to="/" className="text-white my-auto text-decoration-none ms-2" style={{fontWeight:"580", fontSize:"20px"}}>Home</Link>
                        <Link to="/Products" className="text-white my-auto  text-decoration-none ms-2" style={{fontWeight:"580", fontSize:"20px"}}>Products</Link>
                        {localStorage.getItem('hamrovet-token')?
                        <NavDropdown title={<span className ="text-white ms-2 " style={{fontWeight:"580", fontSize:"20px"}}>
                           {JSON.parse(localStorage.getItem('hamrovet-token')).userName }
                            <img className="ps-1 rounded-circle "style={{ height:"3vh"}} src={`https://ui-avatars.com/api/?background=ffffff&color=000000&name=${JSON.parse(localStorage.getItem('hamrovet-token')).userName}`} />
                            
                        
                        </span>} id="basic-nav-dropdown" className="my-auto">
                            <NavDropdown.Item href=""><Link to="/Account" className="text-black my-auto  text-decoration-none"><IoIcons.IoMdPerson/> My Account</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to="/Cart" className="text-black my-auto  text-decoration-none"><IoIcons.IoMdCart/> Cart</Link> </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="text-danger" href="" onClick={() => { setIsLogOut(true); }}>
                                <RiIcons.RiLogoutBoxRLine/>LogOut
                            </NavDropdown.Item>
                        </NavDropdown>
                        :
                            <>
                            <button onClick={() => { setIsLoginOpen(true); }}className="btn btn fw-bold  ms-2" style={{ background: pageOffset >= 648 ? "#2F80ED" : "#219653", color: pageOffset <= 648 ? "#ffffff" : "#ffffff"}}>Login</button>
                            <button onClick={() => { setIsSignupOpen(true); }}className="btn btn fw-bold  ms-2" style={{ background: pageOffset >= 648 ? "#2F80ED" : "#219653", color: pageOffset <= 648 ? "#ffffff" : "#ffffff" }}>Sign Up</button>
                            </>
                        }
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Login open={isLoginOpen} onClose={() => { setIsLoginOpen(false) }} onSignupClick={() => { setIsLoginOpen(false); setIsSignupOpen(true); }} />
                <Signup open={isSignupOpen} onClose={() => { setIsSignupOpen(false) }} onLoginClick={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} />
                <LogOut open={isLogOut} onClose={() => { setIsLogOut(false) }} />
            </div>
        );
    }
export default NavbarUI;