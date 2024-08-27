import { ObjectId } from 'mongodb';
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { Vacation } from "../../Models/Vacation";
import mongoose from 'mongoose';
import axios from 'axios';
import { RootState } from '../store';

const FETCH_ALL_VACATIONS_URL = "http://localhost:3500/api/vacations";
const CREATE_VACATION_URL = "http://localhost:3500/api/vacations/createVacation"
const DELETE_VACATION_URL = "http://localhost:3500/api/vacations/deleteVacation"
const EDIT_VACATION_URL = "http://localhost:3500/api/vacations/editVacation"

export const fetchVacations = createAsyncThunk('vacations/fetchVacations', async()=>{
    const response = await axios.get(FETCH_ALL_VACATIONS_URL);
    return response.data;
  
})


export const addNewVacation = createAsyncThunk('vacations/addNewVacation', async(newPost)=>{
  try{
    const response = await axios.post(CREATE_VACATION_URL, newPost);
    return response.data;
  }catch(err: any){
    return err.message;
  }
})
export const editVacation = createAsyncThunk('vacations/editVacation', async(newValues)=>{
  try{
    const response = await axios.post(EDIT_VACATION_URL, newValues);
  }catch(err: any){
    return err.message;
  }
})

export interface VacationsState{
    value:  any[],
    state: 'idle'|'loading'|'failed'
}

const initialState: VacationsState = {
    value: [],
    state: 'idle'
};

const vacationsSlice = createSlice({
    name: "vacations",
    initialState,
    reducers: {
        setVacations: (state, action)=>{
            const {vacations} = action.payload;
            state = vacations;
        },
        addVacation: (state, action)=>{
            state.value.push(action.payload);
        },
        // editVacation: (state, action)=>{
        //   const editedVacation: Vacation = state?.value.find((item: Vacation)=> item._id === action.payload.)
        // }
    },
    extraReducers: builder=>{
        builder.addCase(fetchVacations.fulfilled, (state, action)=>{
          const loadedVacations = action.payload;
          console.log(loadedVacations);
          state.value = loadedVacations;
        })
        .addCase(fetchVacations.pending, (state, action)=>{
          console.log("pending for data");
        })
        .addCase(fetchVacations.rejected, (state, action)=>{
          console.log("Got rejected");
        })
    }
})
export const {setVacations, addVacation/*editVacation*/} = vacationsSlice.actions;
export const currentVacations = (state: RootState)=> state.reducers.vacations.value;
export const currentVacationState = (state: RootState)=> state.reducers.vacations.state;
export default vacationsSlice.reducer;