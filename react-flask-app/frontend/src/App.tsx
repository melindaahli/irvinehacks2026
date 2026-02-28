import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({ name: '', message: '' });
  var endpoint = '/api/data'

  useEffect(() => {
    fetch('http://127.0.0.1:5000' + endpoint) // Fetch from the Flask API
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>name is: |{data.name}|</h1>
        <p>message is: |{data.message}|</p>
      </header>
    </div>
  );
}

export default App;
