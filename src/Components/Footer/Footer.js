import React from "react";
import { Link } from "react-router-dom";

function FooterUI(props) {
    return (
        <div className="poppins-regular" style={{ background: " #F2F2F2", color: "#000000" }}>
            <div className="col-12 d-flex flex-wrap justify-content-start px-2 py-3">
                <div className="col-12 col-sm-6 col-md-6 mt-3 ">
                    <h3 className="mb-4">Hamro Vet</h3>
                    <p className="m-2" style={{textAlign:"justify"}}>We are dedicated to provide quality products to our customer. Located at the farm in Tanahun. We are dedicated to provide quality products to the users and our customers. The animals here are kept in a healthy environment and the health of the animals is checked on a monthly basis. It is necessary to note that the quality of the animals can only be maintained if the animal is kept healthy and the diet of the animal is kept good. Here all the necessary things for animals are taken care of considiering their rights as well. </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 mt-3 d-flex flex-column d-flex justify-content-start ps-4">
                    <h3 className="mb-4 ms-4">Links:</h3>
                    <Link to="/" className="text-decoration-none ms-4 text-black"><li>Home</li></Link>
                    <Link to="/Products" className="text-decoration-none ms-4 text-black" ><li>Product</li></Link>
                </div>

                <div className="col-12 col-sm-6 col-md-3 mt-3">
                    <h3 className="mb-4">Contact Us</h3>
                    Raipur-7,Tanahun<br />
                    NEPAL<br />
                    Tel: 9824133994<br />
                    <a>
                        hamrovet20@gmail.com
                    </a>
                </div>
            </div>
            <div className="col-12 text-center p-3" style={{ backgroundColor: "#a2a2a2" }}>
                © {new Date().getFullYear()} Copyright:
                <a className="text-black" href="#"> HamroVets</a>
            </div>
        </div>
    );
}
export default FooterUI;