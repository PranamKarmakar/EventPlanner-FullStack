import React from 'react'
import './AdminVendorCurd.css'

import { useEffect } from 'react';
import { useState } from 'react';
import axios  from 'axios';





export default function AdminVendorCurd () {




  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7076/getallvendordetails')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => console.error(error));
  }, []);








  return (
   <div>
  <title>Admin Page</title>
  <header>
    <h1>Welcome to the Admin Page</h1>
  </header>
  { /* User List */ }
  <section>
    <h2>Vendor</h2>
    {/* Insert list of users here */ }
    {/* Insert list of users here */ }
    {/* Insert list of users here */ }
    <table>
      <thead>
        <tr>
          <th>NAME </th>
          <th>EMAIL </th>
          <th>PHONE </th>
          <th>ADDRESS  </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="user-list" /><tbody id="user-list"><tr /></tbody><tbody id="user-list">
          {data.map(items => (
              
                <tr key={items.idVendor}>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.number}</td>
                  <td>{items.address}</td>
                  <td>
                    <button classname="delete-user-row"><a href='/Vendordelete'>Delete</a></button>
                    <button classname="edit-user-row"><a href='/VendorUpdate'>Edit</a></button>
                  </td></tr>
              ))}
            
      </tbody>
    </table>
    { /* Buttons for User Actions */ }
    <button id="create-user"><a href='/VendorCreate'>Create User</a></button>
  </section>
  <footer>
    <p>Copyright © 2023 Admin Page</p>
  </footer>
</div>

  )
}
