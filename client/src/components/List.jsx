import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
export default props => {
  const { removeFromDom } = props;
  // const removeFromDom = (customerId) => {
  //   axios.delete('http://localhost:8000/api/customer/' + customerId)
  //     .then(res => {
  //       removeFromDom(customerId)
  //     })
  // }
  return (
    <div>
      {props.customers.map((customer, idx) => {
        return (
          <table key={idx}>
            <h2>
              <tr>{customer.fname} {customer.lname}</tr>
            </h2>
            <td>Email: {customer.email}</td>
            <td>Led here by: {customer.lead}</td>
            <td>Wedding date(or planned): {customer.weddingDate} </td>
            <td>Planned Venue: {customer.venue} </td>
            <td>Why they hired us and what the photographer should be doing! {customer.reason}</td>
            <td>Instagram Account: {customer.IG}</td>
            <tr>Actions
            <td><Link class="Link" to={"/customer/" + customer._id}>
                details
            </Link>
                <Link class="Link" to={"/customer/" + customer._id + "/edit"}>
                  edit
            </Link>
              </td>
            </tr>
          </table>
        )
      })}
    </div>
  )
}
