import React, { useEffect, useState } from 'react'
import {
    Link
} from "react-router-dom";
import { baseUrl } from "../baseUrl";
import * as FaIcons from 'react-icons/fa';
import CartPop from '../Cart/CartPop';

export default function ProductDesc({ id }) {

    const [product, setProduct] = useState({})
    const [cartPopOpen, setCartPopOpen] = useState(false)
    const [recommendedProduct, setRecommendedProduct] = useState([])
    const [productId, setProductId] = useState()

    useEffect(() => {
        fetchProductAPI();
    }, [])

    const fetchProductAPI = async () => {
        await fetch(baseUrl + 'products/getAllProducts.php')
            .then((res) => res.json())
            .then((res) => {
                var product = res.filter((p) => p.id === id);
                setProduct(product[0]);

                fetchRecommendedProductAPI(product[0].catId);
            })
            .catch((e) => alert('Something went wrong!'));



    }

    const fetchRecommendedProductAPI = async (catId) => {

        var formdata = new FormData();
        formdata.append('id', catId);
        formdata.append('customerId', JSON.parse(localStorage.getItem('hamrovet-token')).customerId);
        

        await fetch(baseUrl + 'products/recommendedProduct.php', {
            method: "POST", body: formdata
        })
            .then((res) => res.json())
            .then((res) => {
                setRecommendedProduct(res.filter((p) => p.id !== id));
            })
            .catch((e) => alert('Something went wrong!'));
    }
    return (
        <div>
            <div style={{ overflowX: "hidden" }}>
                <div
                    className="d-flex flex-wrap col-12 justify-content-center align-items-center text-white"
                    style={{
                        height: "60vh",
                        width: "100vw",
                        position: "relative",
                        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.58) 10%, rgba(50, 51, 51, 0.6) 86%, rgba(51, 51, 25, 0.8) 100%),url("https://images.pexels.com/photos/8673633/pexels-photo-8673633.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")',
                        backgroundColor: "#cccccc",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                    <div className="text-center">
                        <h1 className="small"><Link className="text-decoration-none text-white" to="/">Home </Link> /{product.name}</h1>
                    </div>

                </div>
            </div>
            <section className="my-3 py-5 d-flex flex-column justify-content-center align-items-center">
                <div>
                    {/* <div><h2 className=''>Product Description</h2></div> */}
                </div>

                <div className="container col-10 d-flex flex-wrap justify-content-center">


                    <div className=" column col-xs-12 col-md-8 d-flex justify-content-center align-items-center p-4 m-4" style={{ height: 350, width: 380, overflow: "hidden", borderRadius: "60px 60px 60px 0px" }}>
                        <img style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "5% 100%", transform: "scale(1.1) " }} src={baseUrl + product.image} alt="product" />
                    </div>

                    <div className=" col-12 col-md-5 d-flex flex-column justify-content-center ">
                        <div>

                            <p className="fs-2 accent-color">{product.name}</p>
                            <p>{product.status}</p>
                            <p className='text-justify'>{product.description}</p>
                            <div>
                                <p className="fs-2" style={{ color: "#4caf50" }}> NRs {product.price}</p>
                                <button className="btn btn-primary" style={{ borderRadius: "60px" }} onClick={() => { setCartPopOpen(true); setProductId(product.id);}}><FaIcons.FaCartPlus /> Add to Cart</button>
                                <CartPop onSuccess={()=>{setCartPopOpen(false)}} id={productId} open={cartPopOpen} onClose={() => { setCartPopOpen(false) }} />
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className='d-flex justify-content-center align-items-center'><h4>Recommended for You:</h4></div>
                <div className=" container d-flex flex-wrap ">

                    {recommendedProduct.map((m, index) => {
                        return (

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 d-flex flex-column justify-content-center align-items-center" key={index}>
                                <div className="col-12 bg-white shadow rounded p-2 ">
                                    <div>
                                        <img style={{ height: 200, width: "100%", objectFit: "cover" }} src={baseUrl + m.image} />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="lead my-auto">{m.price}</p>
                                        <div className="d-flex p-2">
                                        </div>
                                        <div className='me-2'>
                                            <FaIcons.FaCartPlus onClick={() => { setCartPopOpen(true); setProductId(m.id);}}/>
                                        </div>


                                    </div>
                                    <p className="fs-5 fw-bold">{m.name}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}
