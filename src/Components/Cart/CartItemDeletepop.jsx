import React from 'react';
import { Modal } from 'react-bootstrap';
import { baseUrl } from "../baseUrl";

export default function CartItemDeletepop(props) {

    const deleteFromCart = async (e) => {

        e.preventDefault();
        await fetch(baseUrl + 'cart/deleteCart.php', {
            method: "POST", body: JSON.stringify({
              'CustomerId': JSON.parse(localStorage.getItem('hamrovet-token')).customerId,
              'cartId': props.id,
            })
          })
            .then(res => res.json())
            .then(res => {
              if (res === false) {
                alert('Something went wrong')
              } else {
                props.onDeleted();
              }
            })

    }

  return (
    <div>
        <Modal show={props.open} onHide={() => { props.onClose() }} centered>
            <Modal.Header closeButton>
                <Modal.Title>Are you Sure ? {props.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={deleteFromCart}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <p>Delete Item from Cart?</p>
                    </div>

                    <div className="d-flex justify-content-between">
                        <button className=" btn btn fw-bold  ms-2 bg-danger text-white">Cancel</button>
                        <button type="submit" className=" btn btn fw-bold  ms-2 bg-primary text-white" >Yes</button>
                    </div>

                </form>
            </Modal.Body>
        </Modal>

    </div>
  )
}
