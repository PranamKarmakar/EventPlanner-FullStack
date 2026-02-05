import React from 'react';
import axios from 'axios';

export default function CreateData() {
  const [data, setData] = React.useState({
    service1: '',
    service2 : '',
    service3:'',
    service4:'' 
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:7076/addservices', data);
      console.log(response.data);
      // handle success response
    } catch (error) {
      console.error(error);
      // handle error response
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="service1">Service 1</label>
          <input type="text" id="service1" name="service1" onChange={handleInputChange} value={data.service1} />
        </div>
        <div>
          <label htmlFor="service2">Service 2</label>
          <input type="text" id="service2" name="service2" onChange={handleInputChange} value={data.service2} />
        </div>
        <div>
          <label htmlFor="service3">Service 3</label>
          <input type="text" id="service3" name="service3" onChange={handleInputChange} value={data.service3} />
        </div>
        <div>
          <label htmlFor="service4">Service 4</label>
          <input type="text" id="service4" name="service4" onChange={handleInputChange} value={data.service4} />
        </div>
        <button type="submit">Create Data</button>
      </form>
    </div>
  );
}