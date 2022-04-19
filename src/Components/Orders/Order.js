import React, { useEffect, useState } from "react";
import { Alert, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import { Table } from 'reactstrap';
import DeleteOrders from "./DeleteOrders";
import swal from 'sweetalert';

function Order(props){

    const [orders, setOrders] = useState();
    const [deleteOrder, setDeleteOrder] = useState(false);
    const [Pstatus, setPstatus] = useState(false);
    


    useEffect(()=>{
        fetchOrder();
    },[]);

    const fetchOrder = async() => {


        var formData = new FormData();
        formData.append('CustomerId',JSON.parse(localStorage.getItem('hamrovet-token')).customerId);

        await fetch(baseUrl + 'orders/getAllOrders.php', {
            method: 'POST',body: formData})
        .then (res => res.json())
        .then(res => {
            if(res === false){
                swal("Something went wrong","","error");

                // alert('Something went wrong')
            }else{
                setOrders(res);
            }
        }
        )
    }

        return (
            <div>
                <div
                    className="d-flex flex-wrap col-12 justify-content-center align-items-center text-white "
                    style={{
                        height: "50vh",
                        width: "100vw",
                        position:"relative",
                        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.58) 20%, rgba(100, 51, 51, 0.6) 86%, rgba(51, 51, 51, 0.8) 100%),url("https://images.unsplash.com/photo-1526653593374-d01bb3968c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHJhYmJpdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")',
                        backgroundColor: "#cccccc",
                        backgroundPosition: "bottom",
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
                        <div className='d-flex flex-column align-items-center justify-content-center p-5 '
                            style={{
                            marginTop: '20px',

                            }}>
                            {orders && orders.reverse().map((order, index)=>{
                                
                                return(
                                    <div className='d-flex justify-content-center '>
                                    <div className='col-md-12 border border-dark p-4 m-4' style={{ backgroundColor: '#fff', borderRadius: "25px"}}>
                                        <div className='d-flex justify-content-between pb-3 border-bottom '>
                                            <div className="d-flex flex-column justify-content-flex-end">
                                                <div> <h5><b>Orders: #{index+1}</b></h5></div>
                                                <div><p><b>Order Date:</b> {order.OrderDate}</p></div>
                                            </div>
                                            
                                        <div>
                                            <div><p><b>No of items: </b>{order.orderItems.length}</p></div>
                                            <div><p><b>Total Amount:</b>
                                            {order.orderItems.length > 0 ? order.orderItems.length ===1 ?parseInt(order.orderItems[0].LineTotal): order.orderItems.reduce((a,b)=>a+parseInt(b.LineTotal),0):""}
                                            
                                            </p></div>
                                        </div>
                                        
                                        </div>
                                        <div className=''>
                                            <Table hover borderless responsive>
                                                <thead style={{lineHeight:"50px"}}className='mt-12'>
                                                    <tr className='border-bottom m-12 text-center align-middle'>
                                                        <th>Image</th>
                                                        <th>Product</th>
                                                        <th>Quantity</th>
                                                        <th>Price</th>
                                                        <th>Line Total</th>
                                                        <th>Created At</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                {order.orderItems.map((item, index)=>{
                                            return(
                                                <tr className='border-bottom m-12 text-center align-middle'>
                                                    <td><img src={baseUrl+item.Image} alt="Product image" style={{ height: "50px", width: "50px", objectFit:"cover" }} /></td>
                                                    <td>
                                                        <p className='text-muted mb-0 d-flex align-items-start'><b>{item.CatName}</b></p>
                                                        <p>{item.ProductName}</p>
                                                    </td>
                                                    <td>{item.Quantity}</td>
                                                    <td>{item.Price}</td>
                                                    <td>{item.LineTotal}</td>
                                                    
                                                    <td>{item.CreatedAt}</td>
                                                    
                                                </tr>
                                            )
                                        })}
                                                </tbody>
                                            </Table>
        
                                        </div>

                                        
                                        <div className='pt-5 d-flex justify-content-between'>                  
                                            
                                        <p><b>Payment Status: </b>{order.isPaid=="0"?'Pending':'Paid'}</p>
                                        <p><b>Delivery Status: </b>{order.status}</p>
                                        
                                        </div>
                                    </div>
                                    </div>
                                );
                            })}
                            

                            
                        </div>
                        
                    </section>
                </div>

            </div>
        );
    }
export default Order;