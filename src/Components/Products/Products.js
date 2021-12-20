import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import CollapsibleUI from "./CollapsibleUI";
import { baseUrl } from "../baseUrl";


export default function Products(){
    const [searchQuery, setSearchQuery] = useState("");
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

 

    useEffect(() => {
       fetchCatAPI();


    }, [])


    const fetchCatAPI = async () => {
        await fetch(baseUrl + 'products/getAllCategories.php')
            .then((res) => res.json())
            .then((res) => {
                setCategories(res);
                console.log(res);
            })
            .catch((e) => alert('Something went wrong!'));

    }


    useEffect(() => {
        fetchProductAPI();
        
    }, [])

    const fetchProductAPI = async () => {
        await fetch(baseUrl + 'products/getAllProducts.php')
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            })
            .catch((e) => alert('Something went wrong!'));



    }

    


        return (
            <div>
                <div style={{ overflowX: "hidden" }}>
                    <div
                        className="d-flex flex-wrap col-12 justify-content-center align-items-center text-white"
                        style={{
                            height: "65vh",
                            width: "100vw",
                            backgroundImage: 'url("https://images.unsplash.com/photo-1486579735245-63fbd086823e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1576&q=80&fbclid=IwAR2IU01jtv1UCT3kaLBRFp5Zmsv9mjxFZAA__qShFXCshP4snyjHAwscUKc")',
                            backgroundColor: "#cccccc",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}>
                        <div className="text-center">
                            <p className="small"><Link className="text-decoration-none text-white" to="/">Home </Link> /Products</p>
                        </div>
                        <div className="col-4 mb-3">
                            <input className="form-control shadow" placeholder="Search Products . . ." value={''} onChange={(e) => {}} />
                        </div>
                    
                    </div>
                </div>
                <div className="my-5 pt-5">
                <div className="container">
                    {searchQuery.length <= 0 ?
                        <div>
                            {categories.map((cat, index) => {
                                return (

                                    <CollapsibleUI onCartClick={(menuId) => {
                                        // if (JSON.parse(localStorage.getItem("rms-token"))) {
                                        //     setCartOpen(true);
                                        //     setMenuId(menuId);
                                        // }
                                        // else {
                                        //     alert('Please login to add to cart!');
                                        // }
                                    }} index={index} cat={cat} product={products.filter((m, index) => m.catId == cat.id)} />
                                );
                            }
                            )}
                        </div>
                        :

                        <>
                            <div className="col-12 d-flex flex-wrap">
                            {categories.map((cat, index) => {
                                return (

                                    <CollapsibleUI onCartClick={(menuId) => {
                                        // if (JSON.parse(localStorage.getItem("rms-token"))) {
                                        //     setCartOpen(true);
                                        //     setMenuId(menuId);
                                        // }
                                        // else {
                                        //     alert('Please login to add to cart!');
                                        // }
                                    }} index={index} cat={cat} product={products.filter((m, index) => m.catId == cat.id)} />
                                );
                            }
                            )}
                            </div>
                        </>
                    }
                </div>
            </div>
            </div>
        );
    }
