import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { User } from '../../Models/User';
import { userEmailPwd } from '../../Models/user-credentials';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';

const AUTH_URL = "http://localhost:3500/api/login";
 
export const login = createAsyncThunk('auth/login', async(data: userEmailPwd)=>{
    
    const response = await axios.get(AUTH_URL, {params: {
        "email": data.email,
        "pwd": data.pwd
    }});
    console.log(response.data["token"]);
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
        logOut: (state)=>{
            state.user = null;
            state.token = null;
            state.role = null;
        }
    },
    extraReducers: builder=>{
        builder.addCase(login.fulfilled, (state, action)=>{
            
            state.token = action.payload["token"];
            state.user = action.payload.user;
            state.role = action.payload.user.role;
            state.status = 'success';
        })
        .addCase(login.pending, (state)=>{
            state.status = 'pending';
            console.log("pending....")
        })
        .addCase(login.rejected, (state)=>{
            state.status = 'rejected';
            console.log("failed at promise");
            
        })
    }
})
export const {setCredentials, logOut} = authSlice.actions;

export const currentUser = (state: RootState)=> state.reducers.user.token;
export const currentToken = (state: RootState) => state.reducers.user.token;

export default authSlice.reducer;