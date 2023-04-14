import { createAsyncThunk , createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import Api_base from '../api/api';

const initialState = {
    posts:[],
    erreur:'',
    loading:false
}
export const fetch_posts=createAsyncThunk("post",async ()=>{
    const response= await axios.get(`${Api_base}tous_post`);
    return response.data
})


export const Post_slice=createSlice({
    name:'posts',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetch_posts.pending,(state,action)=>{
            state.loading=true
        });
        builder.addCase(fetch_posts.fulfilled,(state,action)=>{
            state.posts=action.payload
            state.loading=false
        });
        builder.addCase(fetch_posts.rejected,(state,action)=>{
            state.erreur=action.payload.message
        });
     }
    }
)

export default Post_slice.reducer