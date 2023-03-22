import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
const mySecret = import.meta.env['VITE_API_KEY']
const url = "https://min-api.cryptocompare.com/data/all/coinlist?&api_key="+mySecret
  
  const [count, setCount] = useState(0)
  const [list, setList] = useState('')

  useEffect(() => {
    const fetchAllCoinData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setList(json);
    };

    fetchAllCoinData().catch(console.error);
  }, []);
  console.log(list.Data)
  return (
    <div className="whole-page">
      <h1>My Crypto List</h1>
          <ul>
            {list && Object.entries(list.Data).map(([coin]) =>
              list.Data[coin].PlatformType === "blockchain" ? (
                  <li key={list.Data[coin].FullName}> 
                    {list.Data[coin].FullName}
                  </li>
                ) : null
            )}
          </ul>
    </div>
  )
}

export default App
