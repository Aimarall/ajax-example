import axios from 'axois';
import { useEffect, useState } from 'react';
import classes from './Posts.module.css';


const Posts = ({ }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({ data }) => {
            console.log(data);
        });
    }, []);


    const results = posts.map(post => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    ));


    return (
        <div className={classes.Posts}>
            {results}
        </div>
    );
}

export default App;