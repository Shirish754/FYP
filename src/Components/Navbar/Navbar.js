import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import * as RiIcons  from "react-icons/ri";
import * as IoIcons  from "react-icons/io";
import {
    Link
} from "react-router-dom";

import Login from "../Login/Login";
import Signup from "../Login/Signup";


function NavbarUI(props){
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

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
                <Navbar style={{background:"#000000"}} expand="lg" className="fixed-top">
                    <Container>
                        <Navbar.Brand href="#home" className="text-white">Hamro Vet</Navbar.Brand>
                        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto">
                        <Link to="/" className="text-white my-auto text-decoration-none">Home</Link>
                        <Link to="/Products" className="text-white my-auto  text-decoration-none ms-2">Products</Link>
                        {localStorage.getItem('hamrovet-token')?
                        <NavDropdown title={<span className ="text-white">Shirish Pokhrel
                        
                        </span>} id="basic-nav-dropdown" className="my-auto">
                            <NavDropdown.Item href=""><IoIcons.IoMdPerson/>  My Account</NavDropdown.Item>
                            <NavDropdown.Item href=""><IoIcons.IoMdCart/>  My Cart</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="text-danger" href="" ><RiIcons.RiLogoutBoxRLine/>  LogOut</NavDropdown.Item>
                        </NavDropdown>
                        :
                            <>
                            <button onClick={() => { setIsLoginOpen(true); }}className="btn btn fw-bold  ms-2" style={{ background: pageOffset >= 648 ? "#4f4f4f" : "#c8a97e", color: pageOffset <= 648 ? "#ffffff" : "#c8a97e"}}>Login</button>
                            <button onClick={() => { setIsSignupOpen(true); }}className="btn btn fw-bold  ms-2" style={{ background: pageOffset >= 648 ? "#4f4f4f" : "#c8a97e", color: pageOffset <= 648 ? "#ffffff" : "#c8a97e"}}>Sign Up</button>
                            </>
                        }
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Login open={isLoginOpen} onClose={() => { setIsLoginOpen(false) }} onSignupClick={() => { setIsLoginOpen(false); setIsSignupOpen(true); }} />
                <Signup open={isSignupOpen} onClose={() => { setIsSignupOpen(false) }} onLoginClick={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} />
            </div>
        );
    }
export default NavbarUI;