import React, { useState } from 'react';
import './App.css';
import data from './data';
import List from './List';

function App() {
  const [user, Setuser] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>
          {user.length === 0 ? 'No Data Available' : 'Who has Birthday ?'}
        </h3>
        <List users={user} />
        <button onClick={() => Setuser([])}>clear data</button>
      </section>
    </main>
  );
}

export default App;
