import React, { useEffect, useState } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import {
    Link
} from "react-router-dom";
import { baseUrl } from "../baseUrl";
import CartPop from '../Cart/CartPop';
//import { baseUrl } from "../../Shared/BaseUrl";

export default function CollapsibleUI(props) {
    const [cartPopOpen, setCartPopOpen] = useState(false);
    const [ productId, setProductId] = useState();

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Please click to view Details
        </Tooltip>
      );
      const renderTooltipLogout = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Please login to view Details
        </Tooltip>
      );
    return (
        <div>
            <p>
                <div className="col-12 bg-white shadow d-flex flex-wrap justify-content-between px-4 py-2" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + props.index} aria-expanded="false" aria-controls="collapseExample">
                    <div className="d-flex">
                        <img style={{ height: 120, width: 120, objectFit: "cover" }} src={baseUrl+ props.cat.image} />
                        <p className="fs-3 fw-bold my-auto ms-3">{props.cat.name}</p>
                    </div>
                    <div className="my-auto fs-2">
                        &#9662;
                    </div>
                </div>
            </p>
            <div className="collapse" id={"collapseExample" + props.index}>
                <div className="col-12 d-flex flex-wrap">
                    {props.product.map((m, index) => {
                        return (

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 " key={index}>
                                <div className="col-12 bg-white shadow rounded p-2">
                                    <div>
                                        {localStorage.getItem('hamrovet-token')?
                                    <Link to = {`/products/${m.id}`}>
                                        <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <img style={{ height: 200, width: "100%", objectFit: "cover"}} src={baseUrl+m.image} />
                                        </OverlayTrigger>
                                        </Link> :
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltipLogout}
                                    >
                                    <img style={{ height: 200, width: "100%", objectFit: "cover"}} src={baseUrl+m.image} />
                                    </OverlayTrigger>
                                    }
 
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="lead my-auto pt-2" style={{color:"#00B74A"}}>NRs. {m.price}</p>

                                    
                                        <FaIcons.FaCartPlus onClick={() => { setCartPopOpen(true); setProductId(m.id);}} style={{ cursor: "pointer" }} className="my-auto" size={25} />
                                    
                                    </div>
                                    {localStorage.getItem('hamrovet-token')?
                                    <Link to = {`/products/${m.id}`} className="text-decoration-none text-secondary" style={{width:"5px"}}><p className="fs-5 fw-bold">{m.name}</p></Link>
                                     
                                     :
                                     <p className="fs-5 fw-bold">{m.name}</p>
                                    }
                                        
                                    
                                    
                                    
                                </div>
                            </div>
                        );
                    })}
                </div>
                <CartPop onSuccess={()=>{setCartPopOpen(false)}} id={productId} open={cartPopOpen} onClose={() => { setCartPopOpen(false) }}  />
            </div>
        </div>
    );
}