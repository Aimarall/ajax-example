import { useState } from 'react';
import './App.css';
import FullPost from './components/FullPost/FullPost';
import Posts from './components/Posts/Posts';


function App() {
  const [selectedPost, setSelectedPost] = useState(0);

  
  return (
    <div className="App">
      <FullPost id={selectedPost} />
      <Posts setSelectedPost={setSelectedPost} />
    </div>
  );
}
export default App;