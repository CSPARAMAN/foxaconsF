import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
// import {useNavigate} from "react-router-dom"

function Login() {
  const [userInput, setuserInput] = useState({
    adminEmail: "",
    adminPassword: ""
  })

  const handleOnChange = (event) => {
    // console.log(event.target.value);
    const userInputCopy = { ...userInput }
    userInputCopy[event.target.name] = event.target.value
    setuserInput(userInputCopy)
  }

  let history = useHistory()
  // const navigate=useNavigate()

  const loginSubmit = (e) => {
    e.preventDefault();
  }

  
 
  let loginUser = async () => {
  try{
    let response = await axios.post("https://foxacons.herokuapp.com/authentication", userInput)
    localStorage.setItem("jwt", JSON.stringify(response.data.token))
    localStorage.setItem("auth", true) 
    console.log(response);
    
  if(response.data.statuscode===200){
    toast.success("Logged in",{
      position:"top-center"
     });
     history.goBack()
  }else{
    toast.error("Invalid id or password",{
      position:"top-center"
     });
  }
  }catch(error){
    toast.error("Invalid id or password",{
      position:"top-center"
     });
  }
 
  }
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt=" login" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={loginSubmit}>

                <h5 className='user-notice text-danger'>Service will start soon for users</h5>
                <br></br>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" id="form1Example13"
                    className="form-control form-control-lg" name='adminEmail'
                    value={userInput.adminEmail}
                    onChange={handleOnChange} />
                  <label className="form-label"
                    htmlFor="form1Example13">Email address</label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input type="password" id="form1Example23"
                    className="form-control form-control-lg" name='adminPassword'
                    value={userInput.adminPassword}
                    onChange={handleOnChange} />
                  <label className="form-label"
                    htmlFor="form1Example23">Password</label>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={loginUser}>Sign in</button>
               

              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}

export default Login;
