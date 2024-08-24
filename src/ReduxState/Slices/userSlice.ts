import {createSlice, createAsyncThunk, $CombinedState} from "@reduxjs/toolkit";
import { User } from "../../Models/User";
import { RootState } from "../store";

export interface UserState{
    value: null | User,
    status: 'idle'| 'loading'| 'failed'
}
export interface valuesFetchUser{
    email: string,
    pwd: string
}
const initialState: UserState = {
    value: null,
    status: 'idle'
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: state => {
            state.value = null;
        }
    }
})

export const selectUser = (state: RootState) => state.reducers.user
// export const selectStatus = (state: RootState) => state.user.status
export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async(data: valuesFetchUser)=> {
        const LOGIN_API = 'http://localhost:3500/api/auth/login';
        
    }
)
export default userSlice.reducer;