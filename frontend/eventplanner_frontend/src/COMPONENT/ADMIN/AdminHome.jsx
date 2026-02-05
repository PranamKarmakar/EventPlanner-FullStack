import React from 'react';
import Footer from '../HOME/Footer';
import Navbar from '../HOME/NAVBAR/Navbar';
import './AdminHome.css';

export default function AdminHome() {
  return (
    <div>
      <title>Admin Home Page</title>
      {/* Navbar */}
      <Navbar />
      {/* Main content */}
      <h1>Welcome to the Admin Home Page</h1>
      <div className="cards-container">
        <div className="card">
          <img src="img1.jpg" alt="Card image" />
          <h3>Users</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="/AdminUserCurd">
            <button>View Users</button>
          </a>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/150" alt="Card image" />
          <h3>Vendors</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="/AdminVendorCurd">
            <button>View Vendors</button>
          </a>
        </div>
        <div className="card">
          <img src="vendor.jpeg" alt="Card image" />
          <h3>Services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="/AdminServiceCurd">
            <button>View Services</button>
          </a>
        </div>
      </div>
      {/* Footer */}
      <Footer/>

    </div>
  );
}
