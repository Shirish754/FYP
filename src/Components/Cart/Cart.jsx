import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import { BsArrowLeft } from 'react-icons/bs'
import { baseUrl } from '../baseUrl';
import CartItemDeletepop from './CartItemDeletepop';
export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItem] = useState([]);
  const [cartItemPop,setCartItemPop] = useState(false);

  useEffect(()=>{
    fetchMyCart();
  },[]);

  const fetchMyCart = async () => {

    await fetch(baseUrl + 'cart/getMyCart.php', {
      method: "POST", body: JSON.stringify({
        'CustomerId': JSON.parse(localStorage.getItem('hamrovet-token')).CustomerId,
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res === false) {
          alert('Something went wrong')
        } else {
          setCartItem(res)
        }
      })

  }

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


        <section className='d-flex justify-content-center align-items-center'
          style={{
            background: '#ddd',
            height: 'auto',
            fontFamily: 'sans-serif',


          }}>
          <div className='d-flex align-items-center justify-content-center p-5'
            style={{


            }}>
            <div className='d-flex justify-content-center'>
              <div className='col-md-11 border border-dark p-4' style={{ backgroundColor: '#fff', borderRadius: "25px 0px 0px 25px" }}>
                <div className='d-flex justify-content-between pb-3 border-bottom'>
                  <div> <h3><b>Shopping Cart</b></h3></div>
                  <div><p>No of items</p></div>
                </div>
                <div className=''>

                  {cartItem.length === 0 ? <div>No Item Found</div> :

                    cartItem.map(item => {
                      return (
                        <ListGroup horizontal className='border-bottom p-3'>
                          <ListGroup.Item style={{ width: '20%' }} className='border-0 '> <img src={baseUrl+item.Image} alt="Cart image" style={{ height: "50px", width: "50px", objectFit:"cover" }} /></ListGroup.Item>
                          <ListGroup.Item style={{ width: '25%' }} className='border-0 d-flex flex-column align-items-start '>
                            <p className='text-muted mb-0 d-flex align-items-start'><b>{item.CatName}</b></p>
                            <p className='mb-0 d-flex align-items-start'><b>{item.ProductName}</b></p>
                          </ListGroup.Item>
                          <ListGroup.Item style={{ width: '30%' }} className='border-0 d-block my-auto '>
                            <div className='d-flex '>
                              <button type="button" className='w-50 m-1 border-0 ' style={{ backgroundColor: 'transparent' }} onClick={() => { setQuantity(quantity - 1) }}>-</button>
                              <p className='m-1 border p-2'>{quantity} </p>
                              <button type="button" className='w-50 m-1 border-0' style={{ backgroundColor: 'transparent' }} onClick={() => { setQuantity(quantity + 1) }}>+</button>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item style={{ width: '15%' }} className='border-0 d-flex align-items-center '>Rs. {item.Price}</ListGroup.Item>
                          <ListGroup.Item style={{ width: '15%' }} className='border-0 d-flex align-items-center'><button className='btn btn-danger' onClick={() => { setCartItemPop(true); }}>X</button></ListGroup.Item>
                          <CartItemDeletepop open={cartItemPop} onClose={() => { setCartItemPop(false) }}  />
                        </ListGroup>
                        
                      );
                    })

                  }



                </div>

                <div className='pt-5'>
                  <p> <BsArrowLeft /> Back to Shop</p>
                </div>
              </div>
              <div className='col-md-5 border border-dark p-4  ' style={{ backgroundColor: '#dedede', borderRadius: "0px 25px 25px 0px" }}>
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
                  <button className='btn btn-dark' style={{ width: '100%' }}>Checkout</button>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </div>

  </div>;
}
