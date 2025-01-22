import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name:"authentication",
    initialState:{
    user:[],
    },
    reducers:{
        getData(state, action){
            state.user=[]
        }
    }



})


//export const authAction = authSlice.actions


export default authSlice;