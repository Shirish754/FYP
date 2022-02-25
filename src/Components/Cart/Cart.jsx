import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import {BsArrowLeft} from 'react-icons/bs'
export default function Cart() {
  return <div>
   <div>
   <div style={{ overflowX: "hidden" }}>
                    <div
                        className="d-flex flex-wrap justify-content-center align-items-center text-white"
                        style={{
                            height: "40vh",
                            width: "100vw",
                            backgroundImage: 'url("https://images.unsplash.com/photo-1446018944197-6dcd4ccf2711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9tZXN0aWMlMjBhbmltYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60")',
                            backgroundColor: "#cccccc",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            
                            
                        }}>
                        
                    </div>


                    <section className='' 
                    style={{
                      background: '#ddd',
                      height:'auto',
                      fontFamily: 'sans-serif',

                    
                    }}>
                      <div className='d-flex align-items-center justify-content-center p-5'
                      style={{
                        
                        
                      }}>
                        <div className='d-flex'>
                          <div className='col-md-10 border border-dark p-4' style ={{backgroundColor:'#fff'}}>
                            <div className='d-flex justify-content-between pb-3 border-bottom'>
                              <div> <h3><b>Shopping Cart</b></h3></div>
                              <div><p>No of items</p></div>
                            </div>
                            <div className=''>         

                              <ListGroup horizontal className='border-bottom'>
                                <ListGroup.Item  className='border-0'> Picture</ListGroup.Item>
                                <ListGroup.Item className='border-0'>
                                  <p>Category</p>
                                  <p>Product</p>
                                </ListGroup.Item>
                                <ListGroup.Item className='border-0 d-block my-auto'>
                                  <div className='d-flex '>
                                  <button className='w-50 m-1 border-0' style={{backgroundColor:'transparent'}}>-</button>
                                   <p className='m-1 border p-2'> 9</p> 
                                   <button className='w-50 m-1 border-0' style={{backgroundColor:'transparent'}}>+</button>
                                   </div>
                                </ListGroup.Item>
                                <ListGroup.Item className='border-0'>Price</ListGroup.Item>
                                <ListGroup.Item className='border-0'>X</ListGroup.Item>
                              </ListGroup>

                              <ListGroup horizontal className='border-bottom'>
                                <ListGroup.Item  className='border-0'> Picture</ListGroup.Item>
                                <ListGroup.Item className='border-0'>
                                  <p>Category</p>
                                  <p>Product</p>
                                </ListGroup.Item>
                                <ListGroup.Item className='border-0'>Number calculation</ListGroup.Item>
                                <ListGroup.Item className='border-0'>Price</ListGroup.Item>
                                <ListGroup.Item className='border-0'>X</ListGroup.Item>
                              </ListGroup>

                              <ListGroup horizontal className='border-bottom'>
                                <ListGroup.Item  className='border-0'> Picture</ListGroup.Item>
                                <ListGroup.Item className='border-0'>
                                  <p>Category</p>
                                  <p>Product</p>
                                </ListGroup.Item>
                                <ListGroup.Item className='border-0'>Number calculation</ListGroup.Item>
                                <ListGroup.Item className='border-0'>Price</ListGroup.Item>
                                <ListGroup.Item className='border-0'>X</ListGroup.Item>
                              </ListGroup>

                              

                              
            
                            </div>
                            
                            <div className='pt-5'>
                              <p> <BsArrowLeft/> Back to Shop</p>
                            </div>
                          </div>
                          <div className='col-md-5 border border-dark p-4  ' style={{backgroundColor:'#dedede'}}>
                            <div className='p-2 border-bottom border-dark'><h4>Summary</h4></div>
                          <div>
                            <div className='d-flex justify-content-between p-2'>
                              <div className='d-flex justify-content-between'>
                                <div className='m-1'>Items</div>
                                <div className='m-1'>3 </div>
                              </div >
                              <div className='m-1'>Initial Price</div>
                            </div>
                            <div>
                              <div className='border-bottom border-dark'>
                                <h3>Shipping</h3>
                                <p className='border border-dark bg-white p-1'>Shipping delivery Charge</p>
                              </div>
                            </div>
                          </div>
                            <div className='d-flex justify-content-between pt-2'>
                              <p>Total Price</p>
                              <p>100</p>
                            </div>
                            <div>
                              <button className='btn btn-dark' style={{width:'100%'}}>Checkout</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                </div>
   </div>

  </div>;
}
