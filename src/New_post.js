import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_posts } from "./Store/Post_slice";
import Api_base from './api/api';

function New_post(){
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const token=useSelector(state=>state.Info.tokens)
  const dispatch =useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title) {
          setTitleError('ecrire le titre');
        }
        if (!description) {
          setDescriptionError('ecrire le description');
        }
        if (title && description) {
            const data={
                title:title,
                desc:description
            }
            const headers = {
                Authorization: `Bearer ${token}`,
              };
            axios.post(`${Api_base}new_post`,data,{headers}).then((response)=>{
              if(response.data.message=="ajouter post"){
                setDescriptionError("post ajouter")
                dispatch(fetch_posts()) 
              }else{
                setDescriptionError("ne pas envoyer le post")
              }
           }).catch(error => {
            setDescription(error.response.data.error)
         })
        }
      };
    
      const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setTitleError(null); 
      };
    
      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setDescriptionError(null);
      };


    return(
        <div id="new_post">
        <form onSubmit={handleSubmit}>
            <h2 className="titre_new_post">Titre</h2>
            <input type="text" id="input_new_post_titre" value={title} onChange={handleTitleChange} />
            {titleError && <div className="error">{titleError}</div>}
            <h2 className="titre_new_post">Description</h2>
            <input type="text" id="input_new_post_post" value={description} onChange={handleDescriptionChange} />
             {descriptionError && <div className="error">{descriptionError}</div>}
            <br></br>
             <button type="submit" className="button_home">Post</button>
        </form>
        </div>
    )
}

export default New_post