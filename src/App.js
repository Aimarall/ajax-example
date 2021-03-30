import { useState } from 'react';
import './App.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Example posts", body: "lorem ipsun bla bla bla."},
    { id: 2, title: "Another posts", body: "lorem ipsun bla bla bla."},
    { id: 3, title: "Third posts", body: "lorem ipsun bla bla bla."}
  ])
  return (
    <div className="App">
      <article>
        <h2>Example posts</h2>
        <p>lorem ipsun bla bla bla.</p>
      </article>

   
    </div>
  );
}

export default App;