import React from 'react'
import { Carousel } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import './Carousels.css'

function Carousels() {
  return (
    <>
   <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.biltrax.com/wp-content/uploads/2021/09/building-construction-sunset.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://adamrenovationsltd.co.uk/wp-content/uploads/2019/04/blog1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default withRouter(Carousels)
