import React from 'react';
import { Modal } from 'react-bootstrap';
import { baseUrl } from "../baseUrl";

export default function CartItemDeletepop() {
  return (
    <div>
        <Modal centered>
            <Modal.Header closeButton>
                <Modal.Title>Are you Sure ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
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
