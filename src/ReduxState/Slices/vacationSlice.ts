import { ObjectId } from 'mongodb';
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { Vacation } from "../../Models/Vacation";
import mongoose from 'mongoose';

const FETCH_ALL_POSTS_API = "http://localhost:3500/api/vacations";
const CREATE_VACATION = "http://localhost:3500/api/vacations/createVacation"
const DELETE_VACATION = "http://localhost:3500/api/vacations/deleteVacation"
const EDIT_VACATION = "http://localhost:3500/api/vacations/editVacation"

export interface VacationsState{
    value: Vacation[] | null,
    state: 'idle'|'loading'|'failed'
}

const initialState: VacationsState = {
    value: [],
    state: 'idle'
};

const vacationsSlice = createSlice({
    name: "Vacation",
    initialState,
    reducers: {
        setVacations: (state, action)=>{
            const {vacations} = action.payload;
            state.value = vacations;
        },
        addVacation: (state, action)=>{
            state.value?.push(action.payload);
        },
        editVacation: (state, action)=>{

        }
    }
    // extraReducers: builder=>{
    //     builder.addCase
    // }
})
export const {setVacations, addVacation, editVacation} = vacationsSlice.actions;
export const currentVacations = vacationsSlice.getInitialState().value;
export const currentVacationState = vacationsSlice.getInitialState().state;
export default vacationsSlice.reducer;