import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { baseUrl } from "../baseUrl";
import swal from 'sweetalert';


function Signup(props){

        const [email, setEmail] = useState("");
        const [userName, setUserName] = useState("");
        const [contact, setContact] = useState("");
        const [address, setAddress] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");

        const reset = () => {
            setEmail("");
            setUserName("");
            setContact("");
            setAddress("");
            setPassword("");
            setConfirmPassword("");
        }

        const signIn = async (e) => {
            e.preventDefault();
            await fetch(baseUrl + 'user/SignUp.php', {
                body: JSON.stringify({
                    "username" :userName,
                    "contact": contact,
                    "address": address,
                    "email": email,
                    "password": password,
                    
                }),
                method: "POST"
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.customer_registered === 'true') {
                        reset();
                        swal("Success", "You have successfully registered", "success");
                        // alert('Signup Success!');
                        props.onLoginClick();
                    }
                    else {

                        swal("Error", "Something went wrong", "error");
                        // alert('Signup Unsuccess!');
                    }
                })
                .catch(e => alert(e.message));
    
        }

        return (
            <div>
                <Modal show={props.open} onHide={() => { props.onClose() }} centered>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={signIn}>
                    <div className="mb-3">
                        <label className="form-label">Email Id</label>
                        <input type="email" className="form-control" placeholder="adc@gmail.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="UserName" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contact</label>
                        <input type="number" className="form-control" placeholder="Contact" value={contact} onChange={(e) => { setContact(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                        <p className={`small text-danger ${password !== "" && confirmPassword !== "" && password !== confirmPassword ? '' : 'd-none'}`}>Password doesn't match!</p>
                    </div>
                    <button className="btn btn-primary" disabled={email !== "" && address !== "" && contact !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword ? false : true}>Sign Up</button>
                </form>
                <p className="mt-2">Already have an account? &nbsp;<span onClick={() => { props.onLoginClick(); }} style={{ cursor: "pointer" }} className="text-primary">Login!</span></p>
            </Modal.Body>

        </Modal>
            </div>
        );
    }
export default Signup;