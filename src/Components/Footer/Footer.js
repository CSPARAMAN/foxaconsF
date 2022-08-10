import React from 'react'
import { withRouter } from 'react-router-dom'
import "./Footer.css"
function Footer() {
    return (
        <div className='footer-parent'>
            {/* Footer */}
            <footer className="page-footer font-small mdb-color pt-4">
                {/* Footer Links */}
                <div className="container text-center text-md-left">
                    {/* Footer links */}
                    <div className="row text-center text-md-left mt-3 pb-3">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Company vision</h6>
                            <p> Foxacons motivated by vision and powered by our comitment. It is my pleasure
                                to welcome you all to the FOXACONS Engineering private limited.
                            </p>
                        </div>
                        {/* Grid column */}
                        <hr className="w-100 clearfix d-md-none" />
                        {/* Grid column */}

                        {/* Grid column */}
                        <hr className="w-100 clearfix d-md-none" />
                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact(UAE)</h6>
                            <p>
                                <i className="fas fa-home mr-3" /> PLOT NO - 55, OFFICE NO.17, MUSAFFAH-14, P.O. BOX-98100, ABU
                                DHABI UAE. </p>
                            <p>
                                <i className="fas fa-envelope mr-3" />info@foxacons.com <br></br>rishav@foxacons.com</p>
                            <p>
                                <i className="fas fa-phone mr-3" />
                                  +971 52 772 6077 </p>
                          
                        </div>
                        {/* Grid column */}
                        <hr className="w-100 clearfix d-md-none" />
                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact (INDIA)</h6>
                            <p>
                                <i className="fas fa-home mr-3" /> Office :C-17, Office No.-B-5, Sector-3, Noida 201301 </p>
                            <p>
                                <i className="fas fa-envelope mr-3" />info@foxacons.com <br></br>rishav@foxacons.com</p>
                            <p>
                                <i className="fas fa-phone mr-3" />+91 93612 30777
                                </p>

                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Footer links */}
                    <hr />
                    {/* Grid row */}
                    <div className="row d-flex align-items-center">
                        {/* Grid column */}
                        <div className="col-md-7 col-lg-8">
                            {/*Copyright*/}
                            <p className="text-center text-md-left">© 2022 Copyright:
                                <a href="https://mdbootstrap.com/">
                                    <strong> Foxacons.com</strong>
                                </a>
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-5 col-lg-4 ml-lg-0">
                            {/* Social buttons */}
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-google-plus-g" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
                {/* Footer Links */}
            </footer>
            {/* Footer */}
        </div>
    )
}

export default withRouter(Footer)