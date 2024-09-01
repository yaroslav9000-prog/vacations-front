import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Vacation } from "../../Models/Vacation";
import axios from "axios";
import { fetchVacations } from "./vacationSlice";
import { useSelector } from "react-redux";
import { currentUser } from "./authSlice";
import { RootState } from "../store";
import mongoose from "mongoose";





type FollowedVacas = {
    followed: any[],
    allFollows: any[],
    allFollowsObject: any
}
const initialState: FollowedVacas = {
    followed: [],
    allFollows: [],
    allFollowsObject: {}
} 
const followedSlice = createSlice({
    name: 'follows',
    initialState,
    reducers:{
        createFollowsObject: (state, action)=>{
            for(let index = 0; index < action.payload.allFollows.length; index++){
                if(state.allFollowsObject[`${state.allFollows[index].vacationID}`] == undefined){
                    state.allFollowsObject[`${state.allFollows[index].vacationID}`] = 1;
                }else{
                    state.allFollowsObject[`${state.allFollows[index].vacationID}`]++;
                }
            }
            console.log(state.allFollowsObject);
        },
        setFollows: (state, action)=>{
            state.allFollows = action.payload.allFollows;
            state.followed = action.payload.userFollows;
        },
        makeFollow: (state, action)=>{
            state.allFollows.push(action.payload);
            state.followed.push(action.payload);
            if(!state.allFollowsObject) state.allFollowsObject[action.payload.vacationID] = 0;
            state.allFollowsObject[action.payload.vacationID]+= 1;
        },
        deleteFollow: (state, action)=>{
            state.allFollows = state.allFollows.filter(item=> (item.userID!== action.payload.userID && item.vacationID !== action.payload.vacationID));
            state.allFollowsObject[action.payload.vacationID] --;
            state.followed = state.followed.filter(item=> item.vacationID !== action.payload.vacationID);
        }

    }
})
export const {setFollows, makeFollow, deleteFollow, createFollowsObject} = followedSlice.actions;
export const follows = (state: RootState)=> state.reducers.follows.allFollows;
export const userFollows = (state: RootState)=> state.reducers.follows.followed;
export default followedSlice.reducer;