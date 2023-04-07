import { configureStore } from '@reduxjs/toolkit'
import Post_slice from './Post_slice'
import  Info_slice  from './login_slice'


export const Store=configureStore({
    reducer:{
      posts:Post_slice,
      Info:Info_slice
    }
})