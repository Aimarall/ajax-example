import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Users.module.css";

const Users = ({ }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                setUsers(data.slice(0, 10));
            });
    }, []);

    const results = users.map(users => (
        <article key={users.id}>
            <h2>{users.title}</h2>
            <p>{users.body}</p>
        </article>
    ));

    return (
        <div className={classes.Users}>
            {results}
        </div>
    );
}

export default Users;