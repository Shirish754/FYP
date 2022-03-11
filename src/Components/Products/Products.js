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
                        className="d-flex flex-wrap col-12 justify-content-center align-items-center text-white "
                        style={{
                            height: "60vh",
                            width: "100vw",
                            position:"relative",
                            backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.58) 20%, rgba(100, 51, 51, 0.6) 86%, rgba(51, 51, 51, 0.8) 100%),url("https://images.unsplash.com/photo-1486579735245-63fbd086823e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1576&q=80&fbclid=IwAR2IU01jtv1UCT3kaLBRFp5Zmsv9mjxFZAA__qShFXCshP4snyjHAwscUKc")',
                            backgroundColor: "#cccccc",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",

                        }}>

                       <div className="d-flex flex-column col-5">
                            <div className="text-center">
                                    <p className="small"><Link className="text-decoration-none text-white" to="/">Home </Link> /Products</p>
                            </div>
                            <h3 className="text-center">Find your perfect pet and<br/>livestock</h3>
                            <div className=" d-flex">
                            <input onChange={(e)=>{setSearchQuery(e.target.value);}} value={searchQuery} placeholder="Search Products . . ." className="form-control ms-2" style ={{borderRadius:"5px 0px 0px 5px"}}/>
                            <button className=" btn btn-primary p-2" style ={{borderRadius:"0px 5px 5px 0px"}}>Search&nbsp;Now</button>
                            </div>
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
