import React, { useEffect, useState } from "react";
import { Carousel, } from "react-bootstrap";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";


function FeaturedCarousel(props){


        return (
            <div style={{zIndex:1}}>
                
        <Carousel >
                <Carousel.Item className=""style={{height:"100vh", width:"100vw"}} >
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80"
                    alt="First slide"
                    style={{height:"100vh", width:"100vw", objectFit:"cover"}}
                    />
                
                </Carousel.Item>
                <Carousel.Item style={{height:"100vh", width:"100vw"}}>
                    <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/461717/pexels-photo-461717.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="Second slide"
                    style={{height:"100vh", width:"100vw", objectFit:"cover"}}
                    />

                </Carousel.Item>
                <Carousel.Item style={{height:"100vh", width:"100vw"}}>
                    <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/2127919/pexels-photo-2127919.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="Third slide"
                    style={{height:"100vh", width:"100vw", objectFit:"cover"}}
                    />
                </Carousel.Item>
                </Carousel>
                
            </div>
                );
    }
export default FeaturedCarousel;