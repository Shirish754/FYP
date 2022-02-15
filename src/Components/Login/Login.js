import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { baseUrl } from "../baseUrl";


function Login(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");


    const login = async () => {


        await fetch(baseUrl + 'user/login1.php', {
            body: JSON.stringify({
                "email": email,
                "password": password,
            }),
            method: "POST"
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.Customer_found === 'true') {
                    localStorage.setItem('hamrovet-token', JSON.stringify(res));
                    window.location.reload(true);
                }
                else {

                    alert('Login Unsuccess!');
                }
            })
            .catch(e => alert(e.message));

            
        }
        const onLogin = (e) =>{
            e.preventDefault();
    
            if(email==="" && password === ""){
                setStatus("Both email and password fields are required!");
            }else if(email===""){
                setStatus("Email field is required!");
            }else if(password===""){
                setStatus("Password field is required!");
            }else{
                setStatus("Successfull");
                login();
            }
    
            
    
        }
        return (
            <div>
                <Modal show={props.open} onHide={() => { props.onClose() }} centered>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={onLogin}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="abc @gmail.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="*******" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button className="btn btn-primary">Login</button>
                    {status.length>0?
                    <p className={`small ${status==="Successfull"?"text-success":"text-danger"} text-left mt-3`}>{status}</p>:<></>}
                </form>
                <p className="mt-2">Don't have an account? &nbsp;<span onClick={() => { props.onSignupClick(); }} style={{ cursor: "pointer" }} className="text-primary">Sign Up!</span></p>
            </Modal.Body>

        </Modal>
            </div>
        );
    }
export default Login;