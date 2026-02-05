
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
export default function Vendordelete() {





    const [idVendor, setIdVendor] = useState("");

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:7076/{idVendor}`);
            console.log(response);
            alert("Vendor deleted successfully!");
        } catch (error) {
            console.log(error);
            alert("Vendor deletion failed. Please try again later.");
        }
    };

    const handleInputChange = (event) => {
        // Ensure that only numerical values are allowed
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setIdVendor(event.target.value);
        }
    };

    return (
        <div>
            <h2>Delete Vendor</h2>
            <label htmlFor="idVendor">Vendor ID:</label>
            <input
                type="number" // Use text type instead of int to allow checking
                id="idVendor"
                name="idVendor"
                value={idVendor}
                onChange={handleInputChange}
                required
            />
            <button type="button" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
}


