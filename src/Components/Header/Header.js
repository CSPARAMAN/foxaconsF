import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import ContactUsModal from '../Contactus/ContactUsModal'
import "./Header.css"


function Header() {
    let history=useHistory()
    let goToContact=()=>{
     history.push("/contact")
    }
    return (
        <div>
            <br></br>
            <div className='admin-container'>
                <div className='admin-parent'>
                    <div className='admin-header'>
                        {/* social media  */}
                        <div className='colz'>
                            <div className='colz-icon'>
                                <a href='#'>
                                    <i className='fa fa-facebook-square'></i>
                                </a>
                                <a href='#'>
                                    <i className='fa fa-google-plus-square'></i>
                                </a>
                                <a href='#'>
                                    <i className='fa fa-instagram'></i>
                                </a>
                                <a href='#'>
                                    <i className='fa fa-youtube-square'></i>
                                </a>
                                <a href='#'>
                                    <i className='fa fa-twitter-square'></i>
                                </a>
                            </div>
                        </div>
                        <br></br>
                        <div className='tagline'>
                            <h4>WE CAN HELP BUILD YOUR <span className='subtag'>PROJECT!  </span>
                                TELL US ABOUT YOUR <span className='subtag'>PROJECT!</span> </h4>
                            <br></br>
                            <h5 >WE'LL MAKE YOUR DREAM COME TRUE</h5>
                        </div>
                        <br></br>
                        <hr></hr>
                        <div>
                            
                            <button type="button" className="btn btn-search"
                                data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={goToContact}>
                                Contact Us
                            </button>
                        </div>

                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
            <ContactUsModal />
        </div>
    )
}

export default withRouter(Header)
