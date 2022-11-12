import React from 'react';
import Likes from "./likes";
import image from "./../assets/sea.jpg"
import store from "./store";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrap">
          <div className="card">
              <div className="card-image">
                  <img src={image} alt="surfing"/>
                  <Likes store={store}/>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
