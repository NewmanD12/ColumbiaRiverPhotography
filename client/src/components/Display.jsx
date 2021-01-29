import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
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
            <tr>Name<td>{customer.fname}{customer.lname}</td></tr>
            <tr>Email
              <td>{customer.email}</td>
            </tr>
            <tr>Actions
            <td><Link to={"/customer/" + customer._id}>
                details
            </Link>
                <Link to={"/customer/" + customer._id + "/edit"}>
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
