import React from 'react'
import  {useNavigate}  from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
 const navigates = useNavigate();

// NAVIGATE TO USSER  LOGIN   PAGE 
 const navigateNextUserLog= () =>{   

    navigates('/UserLog');
};

const navigateNextAdminLog= () =>{   

    navigates('/AdminLog');
}
const navigateNextVendorLog= () =>{   

    navigates('/VendorLog');
}






    return (
        <div>
            <nav>
                <div>
                    <div>
                        <a href="/">Home</a>
                        <a href="/services">Services</a>
                        <a href="/About">About Us</a>
                        <a href="/Contact">Contact Us</a>
                    </div>

                </div>
                <div>
                    <button onClick={navigateNextUserLog} classname="user-login-btn">User Login</button>
                    <button onClick={navigateNextVendorLog} classname="vendor-login-btn">Vendor Login</button>
                    <button onClick={navigateNextAdminLog} classname="Admin-login-btn">Admin Login</button>
                </div>
            </nav>
        </div>
    )
}
