import React, { useEffect, useState } from 'react'
import Navbarr from "./Components/Navbar/Navbarr";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AllService from './Components/Services/AllService';
import Login from './Components/Login/Login';
import Contactus from './Components/Contactus/Contactus';
import About from './Components/About/About';
import Project from './Components/Projects/Project';
import axios from 'axios';
import Messages from './Components/Contactus/Messages';
import Home from './Components/Home/Home';
import { Router } from 'react-router';

function App() {

  const [projects, setProjects] = useState([])
  const [messages, setMessages] = useState([])
  useEffect(() => {

    fetchProjects()
    fetchMessges()
  }, [])
  let fetchProjects = async () => {
    // http://localhost:8090/getAllProjects
    try {
      let response = await axios.get("https://foxacons.herokuapp.com/getAllProjects")
      // console.log(response);
      let fetchProjects = response.data.details;
      // console.log(fetchProjects);
      setProjects(fetchProjects)


    } catch (error) {
      console.log("Err :", error);
    }
  }
  let fetchMessges = async () => {

    try {
      let response = await axios.get("https://foxacons.herokuapp.com/getAllContactDetails")
      // console.log(response);
      let fetchMessges = Object(response.data.contactDetails).reverse();
      // console.log(fetchMessges);

      setMessages(fetchMessges)


    } catch (error) {
      console.log("Err :", error);
    }
  }

  return (
    <>
      <BrowserRouter >
        <div className="App">
          <Navbarr fetchProjects={fetchProjects}/>
          
          <Switch>
            <Router >
              
              <Route exact path="/" >
                <Home />
              </Route>

              <Route path="/allServices" >
                <Header />
                <AllService /> </Route>
              <Route path="/projects"> <Project projects={projects} fetchProjects={fetchProjects} /> </Route>
              <Route path="/contact"><Contactus /> </Route>
              <Route path="/login"> <Login /> </Route>
              <Route path="/about"><About /> </Route>
              <Route path="/messages">
                <br></br><br></br><br></br>
                <Messages messages={messages} /> </Route>

            </Router>
          </Switch>

          <br></br>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}


export default App;
