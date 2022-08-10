import React from 'react'
import { withRouter } from 'react-router-dom'
import "./Services.css"

function Services() {
  return (
    <>
   <br></br>
   <br></br>
   <section className="services section-padding" id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur<br />
                  adipisicing elit. Non, quo.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card  text-center  pb-2">
                <div className="card-body">
                  <i className="bi bi-laptop" />
                  <h3 className="card-title">Best Quality</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p><button className="btn  text-light">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card  text-center  pb-2">
                <div className="card-body">
                  <i className="bi bi-journal" />
                  <h3 className="card-title">Sustainability</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p><button className="btn text-light">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card  text-center  pb-2">
                <div className="card-body">
                  <i className="bi bi-intersect" />
                  <h3 className="card-title">Integrity</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p><button className="btn  text-light">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withRouter(Services)
