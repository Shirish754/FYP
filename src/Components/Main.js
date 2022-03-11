import React, { useEffect, useState } from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NavbarUI from "./Navbar/Navbar";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Footer from './Footer/Footer';
import ProductDesc from "./Products/ProductDesc";
import Cart from "./Cart/Cart";
import Account from "./MyAccount/Account";
import { baseUrl } from "./baseUrl";


function Main(props) {





    function PageNotFound(props) {

        return (
            <div className="vh-100 vw-100 d-flex flex-wrap justify-content-center align-items-center">
                <p className="fs-4 fw-bold">{props.title}</p>
            </div>
        );
    }
    return (
        <div>
            <NavbarUI />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={() => <Products />} />
                <Route exact path="/products/:id" component={({ match }) => <ProductDesc id={match.params.id} />} />
                {localStorage.getItem('hamrovet-token') !== null ?
                    <>
                        <Route exact path="/cart" component={() => <Cart />} />
                        <Route exact path="/account" component={() => <Account />} />
                    </> : null
                }
                <Route path="*" component={() => <PageNotFound title="404 Page Not Found . . ." />} />
                <Redirect to="/" />
            </Switch>

            <Footer />


        </div>
    );
}
export default Main;
