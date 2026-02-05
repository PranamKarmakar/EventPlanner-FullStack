import React from 'react'

import { useState } from 'react';
import axios from 'axios';
function VendorUpdate() {




    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const handleServiceUpdate = (e) => {
        e.preventDefault();

        const updatedService = {
            name: name,
            email: email,
            number : number,
            address: address
        };

        axios
            .put("http://localhost:7076/updatevendor", updatedService)
            .then((response) => {
                console.log(response);
                alert("Vendor details updated successfully!");
            })
            .catch((error) => {
                console.log(error);
                alert("Vendor update failed. Please try again later.");
            });
    };

    return (
        <div>
            <h2>Update Vendor Details</h2>
            <form onSubmit={handleServiceUpdate}>
                <lebel htmlFor="name">name</lebel>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="email">email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="number">phone</label>
                <input
                    type="text"
                    id="number"
                    name="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />


                <button type="submit">Update vendor</button>
            </form>
        </div>
    );
}

export default VendorUpdate;





