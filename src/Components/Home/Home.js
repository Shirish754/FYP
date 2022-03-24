import {useEffect, useState} from "react";
import * as FaIcons  from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
    Link
} from "react-router-dom";
import { baseUrl } from "../baseUrl";
import CartPop from "../Cart/CartPop";
import FeaturedCarousel from "./FeatureCarousel";


function Home(props) {

    const [recentProducts, setRecentProducts] = useState([]);
    const [cartPopOpen, setCartPopOpen] = useState(false);
    const [ productId, setProductId] = useState();


    useEffect(() => {
      fetchRecentProducts();
    }, [])

    const fetchRecentProducts = async () => {
        await fetch(baseUrl+'products/recentProducts.php')
        .then(res => res.json())
        .then(res => {
            setRecentProducts(res)
        })
        .catch(err => {console.log(err.message)})

    }
    
    return (
        <div style={{fontFamily:"sans-serif"}}>
            <section >
                <div style={{ overflowX: "hidden" }}>
                    <div className="d-flex flex-wrap col-12 justify-content-center align-items-center text-white "
                        style={{
                            height: "100vh",
                            width: "100vw",
                            position: "relative",
                            backgroundColor: "#cccccc",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",

                        }}>

                        <FeaturedCarousel/>
                        <div className="d-flex flex-column col-5" style={{zIndex:9, position:"absolute"}}>
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

            <div className="d-flex flex-wrap justify-content-center container mt-5"><h3>Why HamroVet?</h3></div>
            <section className="d-flex flex-wrap justify-content-center container mt-5">

                <div className="col-xs-12 col-md-3 mt-2">
                    <div className="d-flex justify-content-center align-items-center container flex-column">
                        <div >
                            <img src="https://media.istockphoto.com/photos/truck-driving-on-the-asphalt-road-in-rural-landscape-at-sunset-with-picture-id859916128?b=1&k=20&m=859916128&s=170667a&w=0&h=-7ONlxcAHM4SqZEAlajF-WsQYgKP5NbrLu5DyM36EcQ=" style={{ height: 160, width: 160, borderRadius: "50%" }} />
                        </div>
                        <div className="d-flex  justify-content-center flex-column ">
                            <div className="text-center mt-4" style={{ fontSize: 18, color: "#666666" }}>
                                <div ><p>Free Shipping</p></div>
                                <div><p>On Order above a lakh</p></div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-3 mt-2">
                    <div className="d-flex justify-content-center align-items-center container flex-column">
                        <div >
                            <img src="https://images.unsplash.com/photo-1504197832061-98356e3dcdcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" style={{ height: 160, width: 160, borderRadius: "50%" }} />
                        </div>
                        <div className="d-flex  justify-content-center flex-column ">
                            <div className="text-center mt-4" style={{ fontSize: 18, color: "#666666" }}>
                                <div><p>Support</p></div>
                                <div><p>24/7 suppport </p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-3 mt-2">
                    <div className="d-flex justify-content-center align-items-center container flex-column">
                        <div >
                            <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" style={{ height: 160, width: 160, borderRadius: "50%" }} />
                        </div>
                        <div className="d-flex  justify-content-center flex-column ">
                            <div className="text-center mt-4" style={{ fontSize: 18, color: "#666666" }}>
                                <div><p>High Quality</p></div>
                                <div><p>Quality Products</p></div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-3 mt-2">
                    <div>
                        <div className="d-flex justify-content-center align-items-center container flex-column ">
                            <img src="https://media.istockphoto.com/photos/chicken-with-freshly-laid-eggs-picture-id1322511698?b=1&k=20&m=1322511698&s=170667a&w=0&h=vI8GTsGY5AvzWAXcoeOoSdVYo4vmRrWI-vD8zP4FjA4=" style={{ height: 160, width: 160, borderRadius: "50%" }} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="text-center mt-4 " style={{ fontSize: 18, color: "#666666" }}>
                                <div><p>Fresh Products</p></div>
                                <div><p>Brought directly from farm</p></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="" style={{marginTop:"50px"}} >
                <div className="col-12 col-md-6 col-lg-12 d-flex flex-wrap justify-content-center align-items-center">
                    <div >
                        <div className="col-12 col-sm-4 col-md-6 col-lg-3 mt-3" style={{
                            backgroundImage:'url("https://media.istockphoto.com/photos/close-up-of-calves-on-animal-farm-eating-food-meat-industry-concept-picture-id1141422847?k=20&m=1141422847&s=612x612&w=0&h=q9ZumuwqBD47-d2t_ulcqWIwODydXGnbXG0IIXvGg_A=")',
                            height:"25vh",
                            width:"50vh",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            }}><p className=" p-2 bg-success" style={{width:"70px"}}>Cattle</p></div>
                        <div className="mt-4 col-sm-4 col-md-6 col-lg-3" style={{
                            backgroundImage:'url("https://media.istockphoto.com/photos/chickens-on-traditional-free-range-poultry-farm-picture-id478287121?k=20&m=478287121&s=612x612&w=0&h=xJTk1f4NOwEsPZiCQ5wHgFNAFq1I9qm578HZplMLnxY=")',
                            height:"25vh",
                            width:"50vh",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            
                            }}><p className=" p-2 bg-success" style={{width:"70px"}}>Poultry</p></div>
                    </div>
                    <div className="m-4 ">
                        <div style={{ height:"25vh",width:"50vh",}} className=" d-flex flex-column justify-content-center align-items-center ">
                            <p>HamroVet</p>
                            <p>Quality product is the most priority</p>
                            <button className="btn btn-success" style={{borderRadius:"50px"}}>Shop Now</button>

                        </div>
                        <div  style={{
                            backgroundImage:'url("https://media.istockphoto.com/photos/dogs-under-blanket-together-picture-id1135489659?k=20&m=1135489659&s=612x612&w=0&h=VkGwlOKklObgInk8tPBbuuFmvHa6mBWH0RAA7Fn-gf0=")',
                            height:"25vh",
                            width:"50vh",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            }} className="mt-4 col-sm-4 col-md-6 col-lg-3 "></div>
                    </div>
                    <div >
                        <div className="mt-4 col-12 col-sm-4 col-md-6 col-lg-4 " style={{
                            backgroundImage:'url("https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")',
                            height:"25vh",
                            width:"50vh",
                            backgroundPosition: "center",
                            backgroundSize: "cover",

                            }}><p className=" p-2 bg-success" style={{width:"70px"}}>Pets</p></div>
                        <div className=" mt-4 col-12 col-sm-4 col-md-6 col-lg-4" style={{
                            backgroundImage:'url("https://media.istockphoto.com/photos/two-goldfish-in-a-fish-tank-picture-id1250823900?k=20&m=1250823900&s=612x612&w=0&h=xIbKsRy8oOQ7oy1UsItZqShjQ_stRE-0ApURW38NmgU=")',
                            height:"25vh",
                            width:"50vh",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            
                            }}><p className=" p-2 bg-success" style={{width:"70px"}}>Fish</p></div>
                    </div>
                </div>
            </section>

            <section className="py-5 ms-2 " style={{marginTop:"50px"}}>
                <div className="container col-12 d-flex flex-wrap fade-in justify-content-between align-items-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex p-3">
                        <div style={{ height: 380, width: 622, overflow: "hidden" }}>
                            <img className="ftco-animated" style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "center", transform: "scale(1.1)" }} src="https://media.istockphoto.com/photos/woman-cuddles-plays-with-her-dog-at-home-picture-id1215973858?k=20&m=1215973858&s=612x612&w=0&h=LfYiOlv16y-jZhCSdBowKwHqnM8OOXI8ueSmUSEsxq8=" />
                        </div>
                    </div>
                    <div className="col-10 col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center p-4 text-justify">
                        <div>
                            <p className="fs-2 accent-color">About Us</p>
                            <p>Hamro Vet</p>

                            <p>sycvabudhjba jsbn cshjdbc sjbnudjhidfbsajkdnia hjsbddsjabsdj shdbnajd asdhjbansdjb shabd</p>

                            <p>bsd ahduwhaiwsf wauhdwiawbwswhsuvsdfushdiws dhfisbdf sdfbisbf sdfuhnsibf sdusbf</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="">Featured Products</p>
                <h2>Our Products</h2>
                <p className="text-center"> Trust is hard to gain, So we seize every oppourtunity to obtain in</p>

            </div>
            <section className="m-4">
                <div className=" container col d-flex flex-wrap ">
                   
                {recentProducts.map((product, index) => {
                        return (
                            <div className="col-12 col-sm-4 col-md-4 col-lg-3 p-2 d-flex flex-column justify-content-center align-items-center" key={index}>
                                <div className="col-12 bg-white border rounded">
                                    <div>
                                        <img style={{ height: 200, width: "100%", objectFit: "cover" }} src={baseUrl + product.image} />
                                    </div>
                                    <div className="d-flex justify-content-between p-2">
                                        <div>
                                            <p>{product.name}</p>
                                            <p className="">Rs. {product.price}</p>
                                        </div>
                                        <div className="p-2">
                                            <FaIcons.FaCartPlus onClick={() => { setCartPopOpen(true); setProductId(product.id);}} style={{ cursor: "pointer" }}/>
                                        </div>
                                    </div>
                                    <CartPop onSuccess={()=>{setCartPopOpen(false)}} id={productId} open={cartPopOpen} onClose={() => { setCartPopOpen(false) }}  />
                                </div>
                                
                                
                                
                            </div>
                        );
                    })}

            

                </div>
                <div className="d-flex justify-content-center align-items-center m-4">
                <button className="btn btn-primary">See More</button>
                </div>
                
            </section>

        </div>
       
    );
}
export default Home;