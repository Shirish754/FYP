import React, { useEffect, useState } from 'react'
import {
    Link
} from "react-router-dom";
import { baseUrl } from "../baseUrl";
import * as FaIcons from 'react-icons/fa';
import CartPop from '../Cart/CartPop';

export default function ProductDesc({id}) {

    const [product, setProduct] = useState({})
    const [cartPopOpen, setCartPopOpen] = useState(false)

    useEffect(()=>{
        fetchProductAPI();
    },[])

    const fetchProductAPI = async () => {
        await fetch(baseUrl + 'products/getAllProducts.php')
            .then((res) => res.json())
            .then((res) => {
                var product = res.filter((p)=>p.id === id);
                setProduct(product[0]);
            })
            .catch((e) => alert('Something went wrong!'));



    }
    return (
        <div>
            <div style={{ overflowX: "hidden" }}>
                    <div
                        className="d-flex flex-wrap col-12 justify-content-center align-items-center text-white"
                        style={{
                            height: "25vh",
                            width: "100vw",
                            backgroundImage: 'url("https://images.unsplash.com/photo-1486579735245-63fbd086823e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1576&q=80&fbclid=IwAR2IU01jtv1UCT3kaLBRFp5Zmsv9mjxFZAA__qShFXCshP4snyjHAwscUKc")',
                            backgroundColor: "#cccccc",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}>
                        <div className="text-center">
                            <p className="small"><Link className="text-decoration-none text-white" to="/">Home </Link> /Products</p>
                        </div>
                        
                    </div>
                </div>
                <section className="my-3 py-5"> 
                <div>
                <div><p>Product Description</p></div>
                </div>

                        <div className="container col-12 d-flex flex-wrap">
                            
                            <div className="col-12 col-md-4 d-flex justify-content-between">
                                <div style={{height: 250 ,width:380, overflow:"hidden" ,borderRadius:"60px 60px 60px 0px" }}>
                                <img style={{ height: "100%" ,width:"100%",objectFit:"cover",  objectPosition: "5% 100%",  transform:"scale(1.1) "}} src={baseUrl +product.image} alt="product"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
                                <div>
                                    
                                    <p className="fs-2 accent-color">{product.name}</p>
                                    <p>{product.description}</p>
                                    <div>
                                    <p className="fs-2" style={{color:"#4caf50"}}> NRs {product.price}</p>
                                    <button className="btn btn-primary" style ={{borderRadius:"60px"}} onClick={()=>{setCartPopOpen(true)}}><FaIcons.FaCartPlus/> Add to Cart</button>
                                    <CartPop open={cartPopOpen} onClose={() => { setCartPopOpen(false) }}  />
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                        <section className="py-5">
                            <div className="container">
                                <h2>Recommended for You:</h2>
                                <div className="d-flex flex-wrap col-12 justify-content-start">
                                    <div className="col-12 col-md-6 col-lg-3 pe-2">
                                        <img  style={{ height: 200, width:"100%", objectFit:"cover", borderRadius:"60px 60px 60px 0px"}} src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                        <p>Price</p>
                                        <p>Name</p>
                                        <a href="#">View Details</a>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3 pe-2">
                                        <img  style={{ height: 200 , width:"100%", objectFit:"cover" , borderRadius:"60px 60px 60px 0px" }} src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                        <p>Price</p>
                                        <p>Name</p>
                                        <a href="#">View Details</a>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3 pe-2">
                                        <img  style={{ height: 200, width:"100%" , objectFit:"cover", borderRadius:"60px 60px 60px 0px"  }} src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                        <p>Price</p>
                                        <p>Name</p>
                                        <a href="#">View Details</a>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3 pe-2">
                                        <img  style={{ height: 200, width:"100%" , objectFit:"cover", borderRadius:"60px 60px 60px 0px"  }} src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                        <p>Price</p>
                                        <p>Name</p>
                                        <a href="#">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </section>
        </div>
    )
}
