import { createAsyncThunk , createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState={
    tokens:null,
    nom:'',
    email:null,
}

export const Info_user=createAsyncThunk("info_user",async (tk)=>{
  const headers = {
    Authorization: `Bearer ${tk}`,
  };
  const response= await axios.get("http://127.0.0.1:8000/api/profile",{headers});
  console.log(initialState.tokens)
  console.log(response.data)
  return response.data
})



export const Info_slice=createSlice({
   name:"tokens",
   initialState,
   reducers:{
     Token_s:(state,action)=>{
         state.tokens=action.payload
     },
     Email_s:(state,action)=>{
      state.email=action.payload
     }
   }
})

export default Info_slice.reducer

export const {Token_s ,Email_s}= Info_slice.actions