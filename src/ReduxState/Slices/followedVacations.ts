import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Vacation } from "../../Models/Vacation";
import axios from "axios";
import { fetchVacations } from "./vacationSlice";
import { useSelector } from "react-redux";
import { currentUser } from "./authSlice";

const userId = useSelector(currentUser)?.id;
const followsEndpoint = "http://localhost:3500/api/follows/";
const fetchFollows = createAsyncThunk('follows/fetchFollows', async()=>{
    
    const response = await axios.get(followsEndpoint + userId);
    return response.data;
})
const makeFollow = createAsyncThunk("follows/makeFollow", async(vacationId: string)=>{
    const response = await axios.post(followsEndpoint, {params: {"vacationId": vacationId, "userId": userId}});
    return response.data;
})
const deleteFollow = createAsyncThunk("follows/makeFollow", async(vacationId: string)=>{
    const response = await axios.delete(followsEndpoint, {params: {"vacationId": vacationId, "userId": userId}});
    return response.data;
})


type FollowedVacas = {
    followed: any[],
    allFollows: any[]
}
const initialState: FollowedVacas = {
    followed: [],
    allFollows: []
} 
const followedSlice = createSlice({
    name: 'follows',
    initialState,
    reducers:{},
    extraReducers: builder=>{
        builder.addCase(fetchVacations.fulfilled, (state, action)=>{
            state.allFollows = action.payload.allFollows;
            state.followed = action.payload.userFollows
        })
        .addCase(fetchFollows.pending, ()=>{
            console.log("pending");
        })
        .addCase(fetchFollows.rejected, (action)=>{
            console.log("rejected"+ action);
        })
        .addCase(makeFollow.fulfilled, (state, action)=>{
            state.followed.push(action.payload);
        })
        .addCase(makeFollow.pending, ()=>{
            console.log("rejected");
        })
        .addCase(makeFollow.rejected, (action)=>{
            console.log("rejected"+ action);
        })
        .addCase(deleteFollow.fulfilled, (state, action)=>{
            state.followed.filter((item: any)=> item.vacationID !== action.payload.data.vacatioID);
        })
        .addCase(deleteFollow.pending, ()=>{
            console.log("pending");
        })
        .addCase(deleteFollow.rejected, (action)=>{
            console.log("rejected"+ action);
        })
    }

})