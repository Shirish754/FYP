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
                    props.onClose();
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

                            <div className="d-flex justify-content-between m-4">
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
