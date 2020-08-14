import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    (async ()=>{
      const call = await fetch(`http://localhost:5000/customers`);
      const data = await call.json();
      setData(data);
    })();
  },[])

  console.table(data)
  return (
    <div className="App">
      <header className="App-header">
        Open console to check ajax data
      </header>
    </div>
  );
}

export default App;
