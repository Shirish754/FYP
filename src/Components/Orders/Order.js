import React from "react";
import { ListGroup } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function Order(props){
        return (
            <div>
                <div
                    className="d-flex flex-wrap col-12 justify-content-center align-items-center text-white "
                    style={{
                        height: "40vh",
                        width: "100vw",
                        position:"relative",
                        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.58) 20%, rgba(100, 51, 51, 0.6) 86%, rgba(51, 51, 51, 0.8) 100%),url("https://images.unsplash.com/photo-1486579735245-63fbd086823e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1576&q=80&fbclid=IwAR2IU01jtv1UCT3kaLBRFp5Zmsv9mjxFZAA__qShFXCshP4snyjHAwscUKc")',
                        backgroundColor: "#cccccc",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",

                    }}>

                    <div className="d-flex flex-column col-5">
                        <div className="text-center">
                                <p className="small"><Link className="text-decoration-none text-white" to="/">Home </Link> /Orders</p>
                        </div>
                    </div>
                
                </div>

                <div>
                    <section className='d-flex justify-content-center align-items-center'
                        style={{
                            background: '#ddd',
                            height: 'auto',
                            fontFamily: 'sans-serif',
                        }}>
                        <div className='d-flex align-items-center justify-content-center p-5'
                            style={{
                            marginTop: '20px',

                            }}>
                            <div className='d-flex justify-content-center'>
                            <div className='col-md-12 border border-dark p-4' style={{ backgroundColor: '#fff', borderRadius: "25px"}}>
                                <div className='d-flex justify-content-between pb-3 border-bottom'>
                                <div> <h3><b>Orders</b></h3></div>
                                <div><p>No of items</p></div>
                                </div>
                                <div className=''>
                                    <ListGroup horizontal className='border-bottom p-3'>
                                        <ListGroup.Item style={{ width: '20%' }} className='border-0 '> <img src="" alt="Product image" style={{ height: "50px", width: "50px", objectFit:"cover" }} /></ListGroup.Item>
                                        <ListGroup.Item style={{ width: '25%' }} className='border-0 d-flex flex-column align-items-start '>
                                        <p className='text-muted mb-0 d-flex align-items-start'><b>Category</b></p>
                                        <p className='mb-0 d-flex align-items-start'>Product Name</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item style={{ width: '30%' }} className='border-0 d-block my-auto '>
                                        <div className='d-flex '>
                                            <p className='m-1 border p-2'>Quantity </p>
                                        </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item style={{ width: '15%' }} className='border-0 d-flex align-items-center '>Rs. 100</ListGroup.Item> 
                                    </ListGroup>
                                

                                </div>
                                
                                <div className='pt-5'>
                                <p> <BsArrowLeft /> Back to Shop</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                    </section>
                </div>

            </div>
        );
    }
export default Order;