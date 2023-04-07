import { configureStore } from '@reduxjs/toolkit'
import Post_slice from './Post_slice'


export const Store=configureStore({
    reducer:{
      posts:Post_slice
    }
})