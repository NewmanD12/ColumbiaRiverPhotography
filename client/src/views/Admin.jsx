import React, { useEffect, useState } from 'react'
import '../App.css';
import axios from 'axios';
import List from '../components/List';
import { Link } from '@reach/router';

const Admin = (props) => {
  const [customers, setCustomers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/customers/all')
      .then(res => {
        setCustomers(res.data);
        setLoaded(true);
      });
  }, []);
  const removeFromDom = customerId => {
    setCustomers(customers.filter(customer => customer._id != customerId));
  }

  return (
    <div>
      <h1>Admin</h1>
      <h2></h2>
      <button><Link class="Link" to={"/contact"}>Add a customer to the database</Link></button>
      {loaded && <List customers={customers} removeFromDom={removeFromDom} setCustomers={setCustomers} />}
    </div>
  )
}

export default Admin;
