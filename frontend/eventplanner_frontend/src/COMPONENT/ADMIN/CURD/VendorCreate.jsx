import React from 'react'
import axios from 'axios';
export default function VendorCreate() {
 
  const [data, setData] = React.useState({
    name: '',
    email : '',
   
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:7076/register', data);
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
          <label htmlFor="name">name</label>
          <input type="text" id="name" name="name" onChange={handleInputChange} value={data.name} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" id="email" name="email" onChange={handleInputChange} value={data.email} />
        </div>
        
        <button type="submit">Create Data</button>
      </form>
    </div>
  );
}


