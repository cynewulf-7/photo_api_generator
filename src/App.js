import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [image, setImage] = useState('')

  const handleChange = () => {
    axios
    .get("https://api.generated.photos/api/v1/faces?api_key=&order_by=random")
    .then(res => {
      const uri = res.data.faces[0].urls[4][512]
     uri && setImage (uri)
    })
    .catch(err => {
      console.log(err.mesage);
    });
  }

  return (
    <div className="App">
      <h1>AI Photo Generator</h1>
      {image && <img src={image} alt="AI Face" />}
      <button type='button' onClick={handleChange}>
        New Image
      </button>
    </div>
  );
}

export default App;
