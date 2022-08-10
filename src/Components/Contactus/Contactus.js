import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./Contactus.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contactus() {

    const [contact, setContact] = useState({

        name: "",
        phone: "",
        email: "",
        message: ""
    })

    const handleOnChange = (event) => {
        console.log(event.target.value);
        const contactCopy = { ...contact }
        contactCopy[event.target.name] = event.target.value
        setContact(contactCopy)
        console.log(contactCopy);

    }
    const history = useHistory()

    let saveContact = async () => {
        try {
            let response = await axios.post("https://foxacons.herokuapp.com/addContact", contact)
            console.log(response);
            toast.success("Email sended",{
              position:"top-center"
             });
            history.goBack()

        } catch (error) {
            console.log(error);
        }
    }

    const submit = (e) => {
      e.preventDefault();
    }
    return (
        <>
    <br></br><br></br>
    <div className=" my-5">
        <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form
            onSubmit={submit}
             >
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={contact.name}
                  onChange={handleOnChange}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={contact.phone}
                  onChange={handleOnChange}
                  placeholder="mobile number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={contact.email}
                  onChange={handleOnChange}
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={contact.message}
                  onChange={handleOnChange}
                ></textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-outline" type="submit" onClick={saveContact}>
                  Send Mail
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
        </>
    )
}

export default Contactus
