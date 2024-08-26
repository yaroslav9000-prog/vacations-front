import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { User } from '../../Models/User';
import { userEmailPwd } from '../../Models/user-credentials';
import axios from 'axios';

const AUTH_URL = "http://localhost:3500/api/login";


export const login = createAsyncThunk('auth/login', async (emailPwd: userEmailPwd)=>{
    const response = await axios.post(AUTH_URL, emailPwd);
    return response.data;
})


interface authState{
    user: null | User,
    token: null | string
}
const initialState: authState= {user: null, token: null}; 
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action)=>{
            const {user, accessToken} = action.payload;
            state.user = user;
            state.token = accessToken
        },
        logOut: (state, action)=>{
            state.user = null;
            state.token = null;
        }
    },
    extraReducers: builder=>{
        builder.addCase(login.fulfilled, (state, action)=>{
            state.token = action.payload["accessToken"];
            state.user = action.payload["user"];
        })
    }
})
export const {setCredentials, logOut} = authSlice.actions;

export const selectCurrentUser = (state: authState)=> state.user;
export const selectCurrentToken = (state: authState) => state.token;

export default authSlice.reducer;