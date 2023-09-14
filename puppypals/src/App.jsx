import { useState } from 'react';
import './App.css';
import { puppyList } from './data/data';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
 console.log(puppies);

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Puppy Pals</h1>
        { 
   puppies.map((puppy) => {
     return <p key={puppy.id}>{puppy.name}</p>
   })
}
      </div>
    </div>
   
  
  )
}

export default App
