import { useEffect, useState } from "react";
import "./style/post.css"
import { useDispatch, useSelector } from "react-redux";
import { fetch_posts } from "./Store/Post_slice";


function Post(){
    const posts=useSelector(state=>state.posts.posts)
    const loading=useSelector(state=>state.posts.loading)
    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(fetch_posts())  
    },[])


    if(loading){
        return(
            <div id="page_post">
                <p>loading ...</p>
            </div>
            
        )
    }


    return(
        <div id="page_post">
            <div id="posts">
            {
                    posts?.map( post => 
                        <div className="card" key={post.id}>
                            <h1>{post.title}</h1>
                            <p id="text_post">{post.desc}</p>
                            <p id="user_name">by:{post.user.fake_name}</p>
                        </div>
                    )
                }
            </div>
            <div id="new_post">
                <h2 className="titre_new_post">Titre</h2>
                <input type="text" id="input_new_post_titre"/>
                <h2 className="titre_new_post">Post</h2>
                <input type="text" id="input_new_post_post"/><br></br>
                <button className="button_home">Post</button>

            </div>

        </div>
    )
}
export default Post