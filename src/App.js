
import './App.css';
import Posts from './components/Posts/Posts';
import Comment from './components/Comments/Comments';
import Albums from './components/Albums/Albums';



function App() {

  return (
    <div className="App">
      <Posts />
      <Comment />
      <Albums />
    </div>
  );
}

export default App;

