import React from 'react'
import axios from 'axios';
import { useState } from 'react';
export default function Userdelete() {



    const [idUser, setIdUser] = useState("");

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:7076/deleteuser/${idUser}`);
            console.log(response);
            alert("Service deleted successfully!");
        } catch (error) {
            console.log(error);
            alert("Service deletion failed. Please try again later.");
        }
    };

    const handleInputChange = (event) => {
        // Ensure that only numerical values are allowed
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setIdUser(event.target.value);
        }
    };

    return (
        <div>
            <h2>Delete Service</h2>
            <label htmlFor="idUser">User ID:</label>
            <input
                type="number" // Use text type instead of int to allow checking
                id="idUser"
                name="idUser"
                value={idUser}
                onChange={handleInputChange}
                required
            />
            <button type="button" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
}

