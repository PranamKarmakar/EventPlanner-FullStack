import React, { useState } from "react";
import axios from "axios";

function UpdateService() {
  const [service1, setService1] = useState("");
  const [service2, setService2] = useState("");
  const [service3, setService3] = useState("");
  const [service4, setService4] = useState("");
 const [serviceId,setServiceId] = useState(" "); 
  const handleServiceUpdate = (e) => {
    e.preventDefault();

    const updatedService = {
       
      service1: service1,
      service2: service2,
      service3: service3,
      service4: service4,
    };

    axios
      .put("http://localhost:7076/updateservices", updatedService)
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
        
        <label htmlFor="service1">service1:</label>
        <input
          type="text"
          id="service1"
          name="service1"
          value={service1}
          onChange={(e) => setService1(e.target.value)}
          required
        />

        <label htmlFor="service2">Service2:</label>
        <input
          type="text"
          id="service2"
          name="service2"
          value={service2}
          onChange={(e) => setService2(e.target.value)}
          required
        />

        <label htmlFor="service3">Service3:</label>
        <input
          type="text"
          id="service3"
          name="service3"
          value={service3}
          onChange={(e) => setService3(e.target.value)}
          required
        />

        <label htmlFor="service4">Sevice4</label>
        <input
          type="text"
          id="service4"
          name="service4"
          value={service4}
          onChange={(e) => setService4(e.target.value)}
          required
        />

        <button type="submit">Update Service</button>
      </form>
    </div>
  );
}

export default UpdateService;

