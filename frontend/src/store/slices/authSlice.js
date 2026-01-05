import {createSlice} from "@reduxjs/toolkit";

//state object for the store
const initialState={
    user:null,
    isAuthenticated:"U",
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
            state.isAuthenticated='T';
        },
        logout:(state)=>{
            state.user=null;
            state.isAuthenticated='F';
        }
    }
});

export const {login,logout} =authSlice.actions
export default authSlice.reducer;

