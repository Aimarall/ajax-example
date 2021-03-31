import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Photos.module.css";

const Photos = ({ }) => {
    const [photos, setAlbums] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(({ data }) => {
                setPhotos(data.slice(0, 10));
            });
    }, []);

    const results = albuphotosms.map(photos => (
        <article key={photos.id}>
            <h2>{photos.title}</h2>
            <p>{photos.body}</p>
        </article>
    ));

    return (
        <div className={classes.Photos}>
            {results}
        </div>
    );
}

export default Photos;