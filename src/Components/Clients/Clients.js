import React from 'react'
import { withRouter } from 'react-router-dom'
import "./Clients.css"

function Clients() {
  return (
    <>
   <div className="container">
        <input type="radio" name="dot" id="one" />
        <input type="radio" name="dot" id="two" />
        <h3 className='clients'>OUR CLIENTS</h3>
       
        <br></br>
        <br></br>
        <div className="main-card">
          <div className="cards">
            <div className="card">
              <div className="content">
                <div className="img">
                   <img src="/assets/client-1.png" alt="" />
                </div>     
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src="/assets/client-2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src="/assets/client-3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="content">
                <div className="img">
                <img src="/assets/client-4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="img">
                <img src="/assets/client-5.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="img">
                <img src="/assets/client-6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <label htmlFor="one" className=" active one" />
          <label htmlFor="two" className="two" />
        </div>
      </div>
    </>
  )
}

export default withRouter(Clients)
