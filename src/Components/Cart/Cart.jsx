import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

export default function Cart() {
  return <div>
   <div>
   <div style={{ overflowX: "hidden" }}>
                    <div
                        className="d-flex flex-wrap col-12 justify-content-center align-items-center text-white"
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
                          <div className='col-md-8 border border-dark p-4' style ={{backgroundColor:'#fff'}}>
                            <div className='d-flex justify-content-between pb-3'>
                              <div> <h3><b>Shopping Cart</b></h3></div>
                              <div><p>No of items</p></div>
                            </div>
                            <div className=''>         

                              <ListGroup horizontal >
                                <ListGroup.Item> Picture</ListGroup.Item>
                                <ListGroup.Item>
                                  <p>Category</p>
                                  <p>Product</p>
                                </ListGroup.Item>
                                <ListGroup.Item>Number calculation</ListGroup.Item>
                                <ListGroup.Item>Price</ListGroup.Item>
                                <ListGroup.Item>X</ListGroup.Item>
                              </ListGroup>

                              <ListGroup horizontal >
                                <ListGroup.Item> Picture</ListGroup.Item>
                                <ListGroup.Item>
                                  <p>Category</p>
                                  <p>Product</p>
                                </ListGroup.Item>
                                <ListGroup.Item>Number calculation</ListGroup.Item>
                                <ListGroup.Item>Price</ListGroup.Item>
                                <ListGroup.Item>X</ListGroup.Item>
                              </ListGroup>

                              <ListGroup horizontal >
                                <ListGroup.Item> Picture</ListGroup.Item>
                                <ListGroup.Item>
                                  <p>Category</p>
                                  <p>Product</p>
                                </ListGroup.Item>
                                <ListGroup.Item>Number calculation</ListGroup.Item>
                                <ListGroup.Item>Price</ListGroup.Item>
                                <ListGroup.Item>X</ListGroup.Item>
                              </ListGroup>
            
                            </div>
                            <div className='pt-2'>
                              <p>Back to Shop</p>
                            </div>
                          </div>
                          <div className='col-md-4 border border-dark p-4 ' style={{backgroundColor:'#dedede'}}>
                            <div className='p-2'><h4>Summary</h4></div>
                          <div>
                            <div>
                              <div className='d-flex justify-content-between'>
                                <div>Items</div>
                                <div>Total Items</div>
                              </div>
                              <div>Initial Price</div>
                            </div>
                            <div>
                              <div>
                                <h3>Shipping</h3>
                                <p className='border border-dark'>Shippig delivery Charge</p>
                              </div>
                            </div>
                          </div>
                            <div className='d-flex justify-content-between'>
                              <p>Total Price</p>
                              <p>Initial Price + Shipping Cost</p>
                            </div>
                            <div>
                              <button className='btn btn-primary'>Checkout</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                </div>
   </div>

  </div>;
}
