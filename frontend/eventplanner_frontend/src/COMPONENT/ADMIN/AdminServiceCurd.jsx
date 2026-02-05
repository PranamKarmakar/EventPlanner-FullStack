
import React from 'react'
import './AdminServiceCurd.css'
import { useEffect } from 'react';
import { useState } from 'react';

import axios from 'axios';








export default function AdminServiceCurd() {


  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7076/getallservices')
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
      { /* User List */}
      <section>
        <h2>Service</h2>
        {/* Insert list of users here */}
        {/* Insert list of users here */}
        {/* Insert list of users here */}
        <table>
          <thead>
            <tr>
              <th>SERVICE 1</th>
              <th>SERVICE 2 </th>
              <th>SERVICE 3 </th>
              <th>SERVICE 4 </th>
              <th>Actions</th>
            </tr>
          </thead>
         
          <tbody id="user-list" /><tbody id="user-list"><tr /></tbody><tbody id="user-list">
          {data.map(items => (
              
                <tr key={items.serviceId}>
                  <td>{items.service1}</td>
                  <td>{items.service2}</td>
                  <td>{items.service3}</td>
                  <td>{items.service4}</td>
                  <td>
                    <button classname="delete-user-row"><a href='/Servicedelete'>Delete</a></button>
                    <button classname="edit-user-row"><a href='/ServiceUpdate'>Edit</a></button>
                  </td></tr>
              ))}
            
          </tbody>
          
        </table>
        { /* Buttons for User Actions */}
        <button id="create-user"><a href='/ServiceCreate'>Create User</a></button>
      </section>
      <footer>
        <p>Copyright © 2023 Admin Page</p>
      </footer>
    </div>

  )
}
