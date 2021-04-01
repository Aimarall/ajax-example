
// import axios from "axios";
// import { useEffect, useState } from "react";
// import classes from "./Author.module.css";

// const Author = ({ id }) => {
//     const [author, setAuthor] = useState({
//         name: "Loading...",
//         email: "Wait fot it!",
//         userId: 0,
//     });

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts' + id)
//             .then((response) => {
//                 const author = response.data;
//                 setAuthor(author);
//             });
//     }, [id]);


//     return (
//         <main className={classes.Author}>

//             <h1>{author.title}</h1>
//             <Author userId={post.userId} />
//             <p>{post.body}</p>

//         </main>
//     );
// }
// export default Author;