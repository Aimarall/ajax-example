// import classes from "./FullPost.module.css";

// const FullPost = ({ id }) => {
//   return (
//     <div className={classes.FullPost}>{id}</div>
//   );
// }
// export default FullPost;



import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./FullPost.module.css";

const FullPost = ({ id }) => {
    const [post, setPost] = useState({
        title: "Loading...",
        body: "Wait fot it!",
    });
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then((response) => {
            const post = response.data;
            setPost(post);
        });
    }, [id]);

  return (
    <main className={classes.FullPost}>
      <h1>title</h1>
      <p>body</p>
      {/* <Comments postId={id} /> */}
    </main>
  );
}
export default FullPost;