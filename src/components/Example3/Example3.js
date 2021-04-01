import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Example3.module.css";

const Example3 = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(["Loading..."]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos/1')
            .then(response => {
                setThumbnailUrl(response.data.thumbnailUrl);
            });
    }, []);
    useEffect(() => {
    }, []);
    return (
        <div className={classes.Example3}>
            <img src={thumbnailUrl}></img>
        </div>
    );
}

export default Example3;