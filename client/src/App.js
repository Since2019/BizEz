import React, { useState } from 'react';

const App = () => {

  const [hello,setHello] = useState(0);
const [str,setStr] = useState('hi');
  const onclick=()=>{
    setHello(hello+1);
    console.log(hello);
    
  }

  return (
    <div>
      <h1>biz hack</h1>
      <button onClick={onclick}>Hello</button>
      <h1>{hello}</h1>
    </div>
  );
};

export default App;