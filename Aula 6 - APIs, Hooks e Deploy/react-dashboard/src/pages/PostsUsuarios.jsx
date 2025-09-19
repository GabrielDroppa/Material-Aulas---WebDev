import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function PostsUsuarios(){
    const [post, setPosts] = useState();
    const parametros = useParams();

    useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/posts?userID=${parametros.id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
    }, []);
    
    return (
    <>
        
        {  post.map(pegaItem => (
                <div className="className">
                    <p>{pegaItem.title}</p>
                </div>
        ))}
    </>
    )
}