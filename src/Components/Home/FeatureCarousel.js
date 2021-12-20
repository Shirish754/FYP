import React, { useEffect, useState } from "react";
import { Carousel, } from "react-bootstrap";


function FeaturedCarousel(props){

    const [featured, setFeatured] = useState([]);

    useEffect(() => {

        fetchFeaturedAPI();

    }, [])

    const fetchFeaturedAPI = async () => {
        await fetch(baseUrl + 'Featured/getAllFeatured.php')
            .then((res) => res.json())
            .then((res) => {
                setFeatured(res);
                console.log(res);
            })
            .catch((e) => alert('Something went wrong!'));

        }
        return (
            <div>
                <Carousel>
            {featured.map((feature, index) => {
                return (

                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 vh-100"
                            src={baseUrl + feature.image}
                            alt="First slide"
                            style={{ objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
            </div>
                );
    }
export default FeaturedCarousel;