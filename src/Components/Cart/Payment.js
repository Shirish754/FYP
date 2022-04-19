import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

export default function PaymentModal(props) {

    const [mobile, setMobile] = useState("");
    const [transaction_pin, setTransactionPin] = useState("");
    const [token, setToken] = useState("");
    const [confirmation_code, setConfirmationCode] = useState("");


    const khaltiPaymentInitialize = () => {

        if (mobile.length !== 10) {
            alert('Mobile number should be of 10 digits');
        }
        else {
            fetch("https://api.shirishpokhrel.com.np/initializeKhalti.php", {
                method: "POST",
                body: JSON.stringify({
                    mobile: mobile,
                    transaction_pin: transaction_pin,
                    amount: 1000,
                    product_identity: "Tour",
                    product_name: "Booking"
                })
            })
                .then((res) => res.json())
                .then((response) => {
                    console.log(response);
                    setToken(response.token);
                })
                .catch(e => {
                    props.onClosePress();
                    alert( "Something went wrong");
                    console.log(e)
                })
        }
    }

    const khaltiPaymentConfirmation = () => {

        fetch("https://api.shirishpokhrel.com.np/confirmKhalti.php", {
            method: "POST",
            body: JSON.stringify({
                public_key: "test_public_key_83adbb318cee47678fc5c98c3c296770",
                token: token,
                confirmation_code: confirmation_code,
                transaction_pin: transaction_pin
            })
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                khaltiPaymentVerify(response.token);
            })
            .catch(e => {
                props.onClosePress();
                alert("Something went wrong");
                console.log(e)
            })
    }

    const khaltiPaymentVerify = (tokenC) => {
        fetch("https://api.shirishpokhrel.com.np/verifyKhalti.php", {
            method: "POST",
            body: JSON.stringify({
                token: tokenC,
                amount: 1000
            })
        })
            .then((response) => {
                setTransactionPin("");
                setMobile("");
                setToken("");
                setConfirmationCode("");
                props.onPaymentSuccess();
            })
            .catch(e => {
                props.onClosePress();
                alert("Something went wrong");
                console.log(e)
            })

    }


    return (
        <>
            <Modal isOpen={props.open} className="modal-dialog-centered poppins-regular">
                <ModalHeader className="col-12 d-flex flex-wrap justify-content-between align-items-center" toggle={() => { props.onClosePress() }}>
                    Pay With Khalti <img src="https://d7vw40z4bofef.cloudfront.net/static/img/logo1.png" style={{ height: 40, width: 80, resizeMode: "contain" }} />
                </ModalHeader>
                <ModalBody>
                    {token === "" ?
                        <>
                            <div className="form-group">
                                <label htmlFor="mobileNumber">Mobile Number</label>
                                <input type="number" className="form-control" id="mobileNumber" placeholder="Mobile Number" value={mobile} onChange={(e) => { setMobile(e.target.value) }} />
                                <small id="emailHelp" className="form-text text-muted">Mobile number should be verified by Khalti</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Transaction Pin</label>
                                <input type="password" className="form-control" id="password" placeholder="Transaction Pin" value={transaction_pin} onChange={(e) => { setTransactionPin(e.target.value) }} />
                            </div>
                            <button className="btn btn-primary mt-2" onClick={() => khaltiPaymentInitialize()}>Confirm</button>
                        </>
                        :
                        <>
                            <div className="form-group">
                                <label htmlFor="password">OTP</label>
                                <input type="password" className="form-control" id="password" placeholder="OTP" value={confirmation_code} onChange={(e) => { setConfirmationCode(e.target.value) }} />
                            </div>
                            <button className="btn btn-primary mt-2" onClick={() => khaltiPaymentConfirmation()}>Pay</button>
                        </>}
                </ModalBody>
            </Modal>
        </>
    );
}









