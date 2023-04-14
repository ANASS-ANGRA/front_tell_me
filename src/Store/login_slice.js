import { createAsyncThunk , createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import Api_base from '../api/api';

const initialState={
    tokens:null,
    nom:'',
    email:null,
    info_p:null
}

export const Info_user=createAsyncThunk("info_user",async (tk)=>{
  const headers = {
    Authorization: `Bearer ${tk}`,
  };
  const res= await axios.get(`${Api_base}profile`,{headers})

    return res.data
})

export const logaut_user=createAsyncThunk("logaut_user",async (tk)=>{
  const headers = {
    Authorization: `Bearer ${tk}`,
  };
  const res= await axios.get(`${Api_base}logout`,{headers})

    return res.data
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
     },
     Token_storage:(state,action)=>{
       const tk = localStorage.getItem("token");
      if(tk){
        state.tokens=tk
      }
     }
   },
   extraReducers:(builder)=>{
      builder.addCase(Info_user.pending,(state,action)=>{
          state.loading=true
      });
      builder.addCase(Info_user.fulfilled,(state,action)=>{
        console.log(action.payload)
          state.info_p=action.payload
          state.loading=false
      });
      builder.addCase(Info_user.rejected,(state,action)=>{
          state.erreur=action.payload.message
      });
      builder.addCase(logaut_user.pending,(state,action)=>{
        state.loading=true
    });
    builder.addCase(logaut_user.fulfilled,(state,action)=>{
      localStorage.removeItem('token');
        state.tokens=null
        state.loading=false
    });
    builder.addCase(logaut_user.rejected,(state,action)=>{
        state.erreur=action.payload.message
    });
   }
  
})

export default Info_slice.reducer

export const {Token_s ,Email_s ,Token_storage}= Info_slice.actions