import {createSlice} from '@reduxjs/toolkit';
import { User } from '../../Models/User';

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
            state.user = user,
            state.token = accessToken
        },
        logOut: (state, action)=>{
            state.user = null,
            state.token = null
        }
    },
    extraReducers:
})
export const {setCredentials, logOut} = authSlice.actions;

export const selectCurrentUser = (state: authState)=> state.user;
export const selectCurrentToken = (state: authState) => state.token;