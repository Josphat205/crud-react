import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPost = createAsyncThunk('post/getPost',async({id})=>{
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.data
})
export const deletePost = createAsyncThunk('post/deletePost',async({id})=>{
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.data
  })
  export const createPost = createAsyncThunk('post/createPost',async(values)=>{
    const {title,body} = values;
    const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {title,body})
    return res.data
  })

const postSlice = createSlice({
    name:'post',
    initialState:{
        post:[],
        loading:false,
        error:null
    },
    extraReducers:{
        [fetchPost.pending]:(state)=>{
            state.loading = true
        },
        [fetchPost.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.posts = payload
        },
        [fetchPost.rejected]:(state,{payload})=>{
            state.error = payload
        },
        [deletePost.pending]:(state)=>{
            state.loading = true
        },
        [deletePost.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.posts = payload
        },
        [deletePost.rejected]:(state,{payload})=>{
            state.error = payload
        },
        [createPost.pending]:(state)=>{
            state.loading = true
        },
        [createPost.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.posts = payload
            console.log('post',payload)
        },
        [createPost.rejected]:(state,{payload})=>{
            state.error = payload
        }
    }
})

export default postSlice.reducer