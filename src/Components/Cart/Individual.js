import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { baseUrl } from "../baseUrl";
import CartItemDeletepop from "./CartItemDeletepop";

function Individual(props){
    const [quantity,setQuantity]=useState(1);
    const [cartItemPop,setCartItemPop] = useState(false);
    const [ cartId, setCartId] = useState();
    const [cartItem, setCartItem] = useState([]);
    
    const fetchMyCart = async () => {

        await fetch(baseUrl + 'cart/getMyCart.php', {
          method: "POST", body: JSON.stringify({
            'CustomerId': JSON.parse(localStorage.getItem('hamrovet-token')).customerId,
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
        return (
            <ListGroup horizontal className='border-bottom p-3'>
                <ListGroup.Item style={{ width: '20%' }} className='border-0 '> <img src={baseUrl+props.item.Image} alt="Cart image" style={{ height: "50px", width: "50px", objectFit:"cover" }} /></ListGroup.Item>
                <ListGroup.Item style={{ width: '25%' }} className='border-0 d-flex flex-column align-items-start '>
                <p className='text-muted mb-0 d-flex align-items-start'><b>{props.item.CatName}</b></p>
                <p className='mb-0 d-flex align-items-start'><b>{props.item.ProductName}</b></p>
                </ListGroup.Item>
                <ListGroup.Item style={{ width: '30%' }} className='border-0 d-block my-auto '>
                <div className='d-flex '>
                    <button type="button" className='w-50 m-1 border-0 ' style={{ backgroundColor: 'transparent' }} onClick={() => { setQuantity(quantity - 1) }}>-</button>
                    <p className='m-1 border p-2'>{quantity} </p>
                    <button type="button" className='w-50 m-1 border-0' style={{ backgroundColor: 'transparent' }} onClick={() => { setQuantity(quantity + 1) }}>+</button>
                </div>
                </ListGroup.Item>
                <ListGroup.Item style={{ width: '15%' }} className='border-0 d-flex align-items-center '>Rs. {props.item.Price}</ListGroup.Item>
                <ListGroup.Item style={{ width: '15%' }} className='border-0 d-flex align-items-center'><button className='btn btn-danger' onClick={() => { setCartItemPop(true); setCartId(props.item.cartId)}}>X</button></ListGroup.Item>
                <CartItemDeletepop id={cartId} open={cartItemPop} onClose={() => { setCartItemPop(false) }}  onDeleted = {()=>{fetchMyCart(); setCartItemPop(false)}}/>
            </ListGroup>
            
        );
    }
export default Individual;