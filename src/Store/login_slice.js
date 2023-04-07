import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tokens:'',
    nom:'',
    email:'',
    pass:''
}



export const Info_slice=createSlice({
   name:"tokens",
   initialState,
   reducers:{
     token:(state,action)=>{
         state.tokens=action.payload
     },
     Email_s:(state,action)=>{
      state.email=action.data
     }
   }
})

export default Info_slice.reducer

export const {token ,Email_s}= Info_slice.actions