import React from 'react';
import Likes from "./likes";
import image from "./../assets/sea.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrap">
          <div className="card">
              <div className="card-image">
                  <img src={image} alt="surfing"/>
                  <Likes />
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
