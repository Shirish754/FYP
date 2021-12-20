import React from "react";

function FooterUI(props) {
    return (
        <div className="poppins-regular" style={{ background: " #F2F2F2", color: "#000000" }}>
            <div className="col-12 d-flex flex-wrap justify-content-start px-2 py-3">
                <div className="col-12 col-sm-6 col-md-6 mt-3">
                    <h3 className="mb-4">Hamro Vet</h3>
                    <p>“vdsh chgsjd hsd csdg cgdsbfsudhjbshjhdb cxshbdsjhbdhdjs jhdhbdshjbsjbdshjdbsjdd sjdsbsahdbshsd dhshj s dhs hd dshdg shasdsajdbbajs csha”</p>
                    <p> busjbjbxc jdhbcsjbd dsbhcisjdbnjsd dsjbjhsdbc hdsbcsh dhsbc hsjdbhsjdcsd sdh csdhz xshd csh zsh zdchsdshsdzjhcsc hcshcbjshddbcjhsb hsdbgsahjdds  dshdv</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mt-3">
                    <h3 className="mb-4">Links:</h3>
                    <ul>
                        <li><a className="text-black text-decoration-none" to="/">Home</a></li>
                        <li><a className="text-black text-decoration-none" to="/menu">Products</a></li>

                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mt-3">
                    <h3 className="mb-4">Contact Us</h3>
                    17th street, Lakeside<br />
                    Lakeside, Pokhara<br />
                    NEPAL<br />
                    Tel: +977 9800000000<br />
                    Fax: 061-500000<br />
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