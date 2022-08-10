import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {  Link, useHistory, withRouter } from "react-router-dom";
import AddProject from '../Projects/AddProject';
import authToken from './../Auth/AuthToken';
import "./Navbar.css"


function Navbarr(props) {
  let tokenCredentials = authToken()
  const [showAddProject, setshowAddProject] = useState(false)
  const history = useHistory()

  let hideAddProjectModal = () => {
    setshowAddProject(false)
  }

  let logout = () => {
    localStorage.clear();
    history.push("/")
  }
let goToContact=()=>{
  history.push("/contact")
}
  return (
    <>
      <Navbar bg="light fixed-top" expand="lg">
        <Navbar.Brand href="/"><img src='/assets/logo.png' alt='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            {tokenCredentials &&
              <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/allServices">Services</Nav.Link>
                {/* <Link className="nav-link" to="/allServices">Services <span className="sr-only"></span></Link> */}
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/messages">Contact</Nav.Link>
                <Nav.Link href="#" onClick={() => { setshowAddProject(true) }}>Add Projects</Nav.Link>
                <Nav.Link href="/login" onClick={logout}>Logout</Nav.Link>
              </>}

            {!tokenCredentials &&
              <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/allServices">Services</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
               
                <form className="form-inline">
        
                <button className=" btn btn-primary my-2 my-sm-0" onClick={goToContact}>Contact</button> 
        </form>
               
              </>}



          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <AddProject 
      showAddProjectModal={showAddProject}
      hideAddProjectModal={hideAddProjectModal}
      fetchProjects={props.fetchProjects}
      />
    </>
  )
}

export default withRouter(Navbarr)
