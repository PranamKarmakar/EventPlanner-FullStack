import React from 'react'
import { useState } from 'react';
import axios from 'axios';
function UserUpdate() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
   
    const handleServiceUpdate = (e) => {
        e.preventDefault();

        const updatedService = {
            name: name,
            email: email,
            
        };

        axios
            .put("http://localhost:7076/updateuser", updatedService)
            .then((response) => {
                console.log(response);
                alert("Service details updated successfully!");
            })
            .catch((error) => {
                console.log(error);
                alert("Service update failed. Please try again later.");
            });
    };

    return (
        <div>
            <h2>Update Service Details</h2>
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

               
                

                <button type="submit">Update Service</button>
            </form>
        </div>
    );
}

export default UserUpdate;



