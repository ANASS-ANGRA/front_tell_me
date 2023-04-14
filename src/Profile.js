import "./style/Profile.css"
import { Info_user } from "./Store/login_slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_posts } from "./Store/Post_slice";
import { useNavigate } from "react-router-dom";
import {  logaut_user} from "./Store/login_slice";
function Profile(){
    const loading = useSelector(state=>state.Info.loading)
    const token=useSelector(state=>state.Info.tokens)
    const Info=useSelector(state=>state.Info.info_p)
  
    const dispatch=useDispatch()
    const Nav = useNavigate()

    useEffect(()=>{
        dispatch(Info_user(token))
    },[])

    function logaut(){
      dispatch(logaut_user(token))
   }

    if(loading){
        return(
            <div id="profile">
           <h1>loading .... </h1>
        </div>
        )
    }
    return(
        <div id="profile">
           <img src={Info?.profile_photo_url} />
           <label>{Info?.name}</label><br/>
           <p>nom utilisateur : {Info?.fake_name} </p>
           <p>email : {Info?.email}</p>
        <button onClick={logaut}>logaut</button>
        </div>
        
    )
        
}
export default Profile 
 