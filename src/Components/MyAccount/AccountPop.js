import React from "react";
import { Modal } from "react-bootstrap";

function AccountPop(props){
        return (
            <div>
                <Modal show={props.open} onHide={() => { props.onClose() }} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add to Sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>

                            <div className="d-flex justify-content-between">
                                <button className=" btn btn fw-bold  ms-2 bg-danger text-white">Cancel</button>
                                <button type="submit" className=" btn btn fw-bold  ms-2 bg-primary text-white" >Yes</button>
                            </div>

                        </form>
                    </Modal.Body>

                </Modal>
            </div>
        );
    }
export default AccountPop;