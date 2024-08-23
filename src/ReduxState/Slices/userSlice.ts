import {createSlice} from "@reduxjs/toolkit";
import { User } from "../../Models/User";

const initialState = <User>{};

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        authUser(state, action){
            state = action.payload;
        }
    }
})

//User actions.
// const setUser = (userObj: User)=>{
//     return {
//         type: "SET_USER",
//         payload: userObj
//     } 
// };
// const logOut = ()=>{
//     return {
//         type: "LOGOUT",
//         payload: {}
//     }
// };

export default userSlice.reducer;