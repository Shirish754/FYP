import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
    Link
} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <section>
                <div style={{ overflowX: "hidden" }}>
                    <div className="d-flex flex-wrap col-12 justify-content-center align-items-center text-white "
                        style={{
                            height: "100vh",
                            width: "100vw",
                            position: "relative",
                            backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.58) 20%, rgba(15, 51, 51, 0.5) 86%, rgba(51, 51, 51, 0.8) 100%),url("https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80")',
                            backgroundColor: "#cccccc",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",

                        }}>
                        <div className="d-flex flex-column col-5">
                            <div className="text-center">
                                <p className="small"><Link className="text-decoration-none text-white" to="/">Home </Link></p>
                            </div>
                            <h1 className="text-center">Buy your Livestock and pets from<br />Hamrovet</h1>
                            <div className="text-center pt-3 ">
                                <button className=" text-center btn btn-light fw-bold  ms-2 " style={{
                                    borderRadius:"50px",
                                    
                                }}><Link to ="/products" className="text-decoration-none text-black"> See All Products</Link> </button>    
                            </div>
                            <div className="text-center p-5">
                                <Link to="/" className="text-decoration-none text-white"><h5>See More</h5></Link>
                                <Link to="/" className="text-decoration-none text-white"><RiArrowDropDownLine /></Link>
                                
                            </div>
                        </div>




                    </div>
                </div>
            </section>


            <section className="d-flex justify-content-center container mt-5">
                <div className="col-12 col-md-6 mt-2">
                    <div className="d-flex justify-content-center align-items-center container flex-column">
                        <div >
                            <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" style={{ height: 320, width: 320, borderRadius: "50%" }} />
                        </div>
                        <div className="d-flex  justify-content-center flex-column ">
                            <div className="text-center mt-4" style={{ fontSize: 18, color: "#666666" }}>
                                <div><p>Pets</p></div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-2">
                    <div>
                        <div className="d-flex justify-content-center align-items-center container flex-column ">
                            <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" style={{ height: 320, width: 320, borderRadius: "50%" }} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="text-center mt-4 " style={{ fontSize: 18, color: "#666666" }}>
                                <div><p>Livestocks</p></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="my-3 py-5">
                <div className="container col-12 d-flex flex-wrap">
                    <div className="col-12 col-md-6 d-flex justify-content-between">
                        <div style={{ height: 380, width: 622, overflow: "hidden" }}>
                            <img style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "5% 100%", transform: "scale(1.1)" }} src="https://images.unsplash.com/photo-1588474469548-c2ad10db52ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80 " />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                        <div>
                            <p className="fs-2 accent-color">About Us</p>
                            <p>Hamro Vet</p>

                            <p>sycvabudhjba jsbn cshjdbc sjbnudjhidfbsajkdnia hjsbddsjabsdj shdbnajd asdhjbansdjb shabd</p>

                            <p>bsd ahduwhaiwsf wauhdwiawbwswhsuvsdfushdiws dhfisbdf sdfbisbf sdfuhnsibf sdusbf</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <h2>Recently Added</h2>
                    <div className="d-flex flex-wrap col-12 justify-content-start">
                        <div className="col-12 col-md-6 col-lg-3 pe-2">
                            <img style={{ height: 250, width: "100%", objectFit: "cover", borderRadius: "60px 60px 60px 0px" }} src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            <p>Price</p>
                            <p>Name</p>
                            <a href="#">View Details</a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 pe-2">
                            <img style={{ height: 250, width: "100%", objectFit: "cover", borderRadius: "60px 60px 60px 0px" }} src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            <p>Price</p>
                            <p>Name</p>
                            <a href="#">View Details</a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 pe-2">
                            <img style={{ height: 250, width: "100%", objectFit: "cover", borderRadius: "60px 60px 60px 0px" }} src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            <p>Price</p>
                            <p>Name</p>
                            <a href="#">View Details</a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 pe-2">
                            <img style={{ height: 250, width: "100%", objectFit: "cover", borderRadius: "60px 60px 60px 0px" }} src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            <p>Price</p>
                            <p>Name</p>
                            <a href="#">View Details</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default Home;