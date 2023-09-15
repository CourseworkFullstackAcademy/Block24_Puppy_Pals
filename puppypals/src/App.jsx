/* eslint-disable */
import { useState } from 'react';
import './App.css';
import { puppyList } from './data/data';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

    // Function to chunk the puppies into groups of 4
    function chunkArray(arr, chunkSize) {
      const chunks = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize));
      }
      return chunks;
    }
  
    // Chunk the puppies into groups of 4 for rendering
    const puppyChunks = chunkArray(puppies, 4);

  return (
    <div className="wrapper">
      <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
       
          <a className="navbar-brand" href="#">Block 24 Puppy Pals by Debbie King</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          
        </div>
        </div>
    </nav>
      <div className="container">
        <h1 className="text-center my-4" id="title">Puppy Pals</h1>
        {puppyChunks.map((chunk, index) => (
          <div className="row" key={index}>
            {chunk.map((puppy) => (
              <div className="col-md-3 fs-3" key={puppy.id}>
                <p className="text-center" onClick={() => setFeatPupId(puppy.id)}>{puppy.name}</p>
              </div>
            ))}
          </div>
        ))}
        <p>
          {featPupId && (
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem', marginLeft: '23rem', padding: '10px', width: '50vw', border: '1px solid black', borderRadius: '15px' }}>

              <h3 >{featuredPup.name}</h3>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
          )}
        </p>
      </div>
    </div>
  );
}

export default App;