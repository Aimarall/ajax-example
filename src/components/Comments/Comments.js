import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Comments.module.css";

const Comment = ({ }) => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(({ data }) => {
                setComment(data.slice(0, 10));
            });
    }, []);

    const results = comment.map(comment => (
        <article key={comment.id}>
            <h2>{comment.title}</h2>
            <p>{comment.body}</p>
        </article>
    ));

    return (
        <div className={classes.Comment}>
            {results}
        </div>
    );
}

export default Comment;