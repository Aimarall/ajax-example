
import { useState } from 'react';
import './App.css';
import FullPost from './components/FullPost/FullPost';
import Posts from './components/Posts/Posts';
import Example1 from './components/Example1/Example1';
import Example2 from './components/Example2/Example2';

function App() {
  const [selectedPost, setSelectedPost] = useState(0);

  return (
    <div className="App">
      <Example1 />
      <Example2 />
      {/* <FullPost id={selectedPost} />
      <Posts setSelectedPost={setSelectedPost} /> */}
    </div>
  );
}

export default App;