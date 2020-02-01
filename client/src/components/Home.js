import React, { useState } from 'react';
import axios from 'axios';
import { Fragment } from 'react';

const Home = () => {
  const [data,setData] = useState([]);
  const getData=async()=>{
    try {
      const res = await axios.get('http://localhost:7777/');
      console.log(res.data);  
    } catch (err) {
      console.log(err);
      
    }
    
    
    // setData([...data,res]);
  }
  return (
    <Fragment>
      {data}
      <button onClick={getData}>Show Me The Ipad Info</button>
    </Fragment>
  );
};

export default Home;