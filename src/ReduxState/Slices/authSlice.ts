import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { User } from '../../Models/User';
import { userEmailPwd } from '../../Models/user-credentials';
import axios from 'axios';

const AUTH_URL = "http://localhost:3500/api/login";
 
export const login = createAsyncThunk('auth/login', async(data: userEmailPwd)=>{
    
    const response = await axios.get(AUTH_URL, {params: {
        "email": data.email,
        "pwd": data.pwd
    }});

    return response.data;

})


interface authState{
    user: null | User,
    token: null | string,
    role: 'user'|  'admin'| null,
    status: 'success' | 'idle' | 'pending' | 'rejected'
}
const initialState: authState= {user: null, token: null, role: null, status: 'idle'}; 
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
            
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.role = action.payload.user.role;
            console.log(action.payload.cookie);
            state.status = 'success';
        })
        .addCase(login.pending, (state)=>{
            state.status = 'pending';
            console.log("pending....")
        })
        .addCase(login.rejected, (state)=>{
            state.status = 'rejected';
            console.log("failed at promise")
        })
    }
})
export const {setCredentials, logOut} = authSlice.actions;

export const currentUser = (state: authState)=> state.user;
export const currentToken = (state: authState) => state.token;

export default authSlice.reducer;