
import React from 'react'
import Navbar from '../HOME/NAVBAR/Navbar';
import './UserHome.css'


export default function UserHome() {


    const navigateNextUserHome= () =>{   

       alert("BOOKED ");
    };
    

    return (
        <div  className='UserHome'>
            <Navbar/>
            <div className="vendor-list">
                <div className="vendor-card">
                    <img src="img0.jpg" alt="img0" />
                    <h3>Vendor 1</h3>
                    <p>Description of Vendor 1</p>
                    <button onClick={navigateNextUserHome} className="booking-button">Book Now</button>
                </div>
            </div>
        </div>

    )
}



