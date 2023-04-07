import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tokens:null,
    nom:'',
    email:null,
}



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