import { useEffect, useState } from "react";
import "./style/post.css"
import { useDispatch, useSelector } from "react-redux";
import { fetch_posts } from "./Store/Post_slice";
import { useNavigate } from "react-router-dom";
import New_post from "./New_post";
import { Token_storage } from "./Store/login_slice";


function Post(){
    const posts=useSelector(state=>state.posts.posts)
    const loading=useSelector(state=>state.posts.loading)
    const token=useSelector(state=>state.Info.tokens)
    const dispatch=useDispatch()
    const Nav = useNavigate()

    useEffect(()=>{
        if (token === null) {
          Nav('/login');
        }else{
          dispatch(fetch_posts())
        } 
    },[token])


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
         <New_post/>
        </div>
    )
}
export default Post