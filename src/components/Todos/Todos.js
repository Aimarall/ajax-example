import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Todos.module.css";

const Todos = ({ }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(({ data }) => {
                setTodos(data.slice(0, 10));
            });
    }, []);

    const results = todos.map(todos => (
        <article key={todos.id}>
            <h2>{todos.title}</h2>
            <p>{todos.body}</p>
        </article>
    ));

    return (
        <div className={classes.Todos}>
            {results}
        </div>
    );
}

export default Todos;