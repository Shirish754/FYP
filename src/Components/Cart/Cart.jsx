import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs'
import { baseUrl } from '../baseUrl';
import Individual from './Individual';
import swal from 'sweetalert'; 
import PaymentModal from './Payment';


export default function Cart() {
  const [cartItem, setCartItem] = useState([]);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  useEffect(()=>{
    fetchMyCart();
  },[]);

  const fetchMyCart = async () => {

    await fetch(baseUrl + 'cart/getMyCart.php', {
      method: "POST", body: JSON.stringify({
        'CustomerId': JSON.parse(localStorage.getItem('hamrovet-token')).customerId,
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res === false) {
          swal("Something went wrong","","error");
          // alert('Something went wrong')
        } else {
          console.log(res);
          setCartItem(res)
        }
      })

  }

  const makeOrder = async(paid = false)=>{

    var formData =  new FormData();
    formData.append('customerId',JSON.parse(localStorage.getItem('hamrovet-token')).customerId);
    if(paid){
      formData.append('payment',true);
    }
    await fetch(baseUrl + 'orders/makeOrder.php',{
      method:"POST",
      body:formData
    })
    .then(res=>res.json())
    .then(res=>{
      if(res === true){
        fetchMyCart();
        // createNotification("success","order");
        swal("Order placed successfully","","success").then(()=>{
          window.location.href = '/order';
        });
        // alert('Order Placed Successfully');
        // window.location.href = '/order';
      }
      else{
        swal("Something went wrong","","error");
        // alert('Something went wrong');
      }
    })
  }

  return <div>
    <div>
      <div style={{ overflowX: "hidden" }}>
        <div
          className="d-flex flex-wrap justify-content-center align-items-center text-white"
          style={{
            height: "50vh",
            width: "100vw",
            backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.58) 20%, rgba(100, 51, 51, 0.6) 86%, rgba(51, 51, 51, 0.8) 100%),url("https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGRvbWVzdGljJTIwYW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60")',
            backgroundColor: "#cccccc",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <h4 style={{fontFamily:"Helvetica-Neue"}}>"Our Product,Expectation of Customer"</h4>
        </div>


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
              <div className='col-md-11 border border-dark p-4' style={{ backgroundColor: '#fff', borderRadius: "25px 0px 0px 25px"}}>
                <div className='d-flex justify-content-between pb-3 border-bottom'>
                  <div> <h3><b>Shopping Cart</b></h3></div>
                  <div><p><b>No of items:</b>&nbsp;{cartItem.length}</p></div>
                </div>
                <div className=''>

                  {cartItem.length === 0 ? <div>No Item Found</div> :

                    cartItem.map(item => {
                      return (
                        <Individual onEdited={()=>{fetchMyCart();}} item={item}/>
                        
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
                      <div className='m-1'><p>No of items:&nbsp;{cartItem.length}</p></div>
                    </div >
                    <div className='m-1'>Initial Price:  
                    {cartItem.length > 0 ? cartItem.length ===1 ?(parseInt(cartItem[0].Price) * parseInt(cartItem[0].productquantity)) : cartItem.reduce((a,b)=>a+(parseInt(b.Price)*parseInt(b.productquantity)),0):""}
                    
                    </div>
                  </div>
                  <div>
                    <div className='border-bottom border-dark'>
                      <h3>Shipping</h3>
                      <p className='border border-dark bg-white p-1'>Free Delivery </p>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-between pt-2'>
                  <p>Final Price</p>
                  <p>
                  {cartItem.length > 0 ? cartItem.length ===1 ?(parseInt(cartItem[0].Price) * parseInt(cartItem[0].productquantity)) : cartItem.reduce((a,b)=>a+(parseInt(b.Price)*parseInt(b.productquantity)),0):""}
                    </p>
                </div>
                
                <div className='p-2'>
                  <button disabled={cartItem.length <= 0} onClick={()=>{
                      makeOrder();
                  }} className='btn btn-dark' style={{ width: '100%' }} >Cash On Delivery</button>
                </div>
                <div className='p-2'>
                  <button disabled={cartItem.length <= 0}  onClick={()=>{
                    setOpenPaymentModal(true);
                  }} className='btn btn-dark' style={{ width: '100%' }}>Pay Online</button>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </div>
    <PaymentModal open={openPaymentModal} onClosePress={() => { setOpenPaymentModal(false) }} onPaymentSuccess={() => { makeOrder(true); }} />
  </div>;
}
