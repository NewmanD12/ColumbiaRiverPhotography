import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';


const Contact = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [lead, setLead] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [venue, setVenue] = useState("");
  const [reason, setReason] = useState("");
  const [IG, setIG] = useState("");
  const [errors, setErrors] = useState([]);
  const createCustomer = customer => {
    axios.post('http://localhost:8000/api/customer/new', customer)
      .then(response => {
        navigate("/")
      })
      .catch(err => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
  }
  const onSubmitHandler = e => {
    e.preventDefault();
    createCustomer({ fname, lname, email, lead, weddingDate, venue, reason, IG });
  }

  return (
    <form onSubmit={onSubmitHandler}>
      {errors.map((err, index) => <h2 key={index}>{err}</h2>)}
      <div>
        <label>First Name* </label>
        <input type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
        <label>Last Name* </label>
        <input type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
      </div>
      <div>
        <label>What is a good email address?* </label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>What lead you to my photo page?! * </label>
        <input type="text" name="lead" value={lead} onChange={(e) => setLead(e.target.value)} />
      </div>
      <div>
        <label>Wedding date (or planned): * </label>
        <input type="date" name="wedding" value={weddingDate} onChange={(e) => setWeddingDate(e.target.value)} />
      </div>
      <div>
        <label>Wedding venue/ potential wedding venue? * </label>
        <input type="text" name="venue" value={venue} onChange={(e) => setVenue(e.target.value)} />
      </div>
      <div>
        <label>What is the most important thing you look for in a wedding photographer?</label>
        <input type="text" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} />
      </div>
      <div>
        <label>"What iws your Instagram User name? I will follow you back :)"</label>
        <input type="text" name="IG" value={IG} onChange={(e) => setIG(e.target.value)} />
      </div>
      <button className="submitButton">Submit</button>
    </form>
  );
}
export default Contact;