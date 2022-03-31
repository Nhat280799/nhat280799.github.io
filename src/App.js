import React, { useState } from 'react'
import data from './data.js';
import List from './List.js';
import logo from './logo.svg';



function App() {
  const [people,setPeople] = useState(data);
  return (
    <div className="container">
      {
          <div>
          <h3>{people.length}{" have birthday today"}</h3>
          <List people={people} />
          <button onClick={() => {setPeople([])}}>Clear all</button>
          </div>
      }
    </div>
  );
}

export default App;
