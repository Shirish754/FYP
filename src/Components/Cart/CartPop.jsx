import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { baseUrl } from "../baseUrl";

export default function CartPop(props) {
    const [quantity, setQuantity] = useState(1);

    const handleCartPopOpen = async (e) => {
        e.preventDefault();
        await fetch(baseUrl + 'cart/addToCart.php', {
            body: JSON.stringify({ 
                'CustomerId': JSON.parse(localStorage.getItem('hamrovet-token')).customerId, 
                'productId': props.id, 
                'quantity': quantity }),
            method: 'POST'
        })
            .then(res => res.json())
            .then((data) => {
                if (data) {
                    alert('Cart Added Successful!')
                }
                else {
                    alert('Add to cart failed!')
                }
            })



    }
    return (
        <div>
            <div>
                <Modal show={props.open} onHide={() => { props.onClose() }} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add to Cart ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleCartPopOpen}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p>Number of Quantity:</p>
                                <div className='d-flex mb-1 pb-1 '>

                                    <button type="button" className='w-50 m-1 border-0 ' style={{ backgroundColor: 'transparent' }} onClick={() => { setQuantity(quantity - 1) }}>-</button>
                                    <p className='m-1 border p-2'> {quantity}</p>
                                    <button type="button" className='w-50 m-1 border-0' style={{ backgroundColor: 'transparent' }} onClick={() => { setQuantity(quantity + 1) }}>+</button>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <button className=" btn btn fw-bold  ms-2 bg-danger text-white">Cancel</button>
                                <button type="submit" className=" btn btn fw-bold  ms-2 bg-primary text-white" >Yes</button>
                            </div>

                        </form>
                    </Modal.Body>

                </Modal>
            </div>
        </div>
    )
}
