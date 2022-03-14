import React, { useEffect, useState } from "react";
import { Carousel, } from "react-bootstrap";


function FeaturedCarousel(props){


        return (
            <div>
                <Carousel>
            {Array(5).fill().map((feature, index) => {
                return (

                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 vh-100"
                            src={'https://images.pexels.com/photos/162520/farmer-man-shepherd-dog-162520.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}
                            alt="First slide"
                            style={{ objectFit: "cover" }}
                        />
                        <p></p>
                    </Carousel.Item>
                );
            })}
        </Carousel>
                
            </div>
                );
    }
export default FeaturedCarousel;