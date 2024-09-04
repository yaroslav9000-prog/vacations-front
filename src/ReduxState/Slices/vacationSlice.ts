import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { Vacation } from "../../Models/Vacation";
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
    const response = await axios.post(CREATE_VACATION_URL, newPost, );
    return response.data;
  }catch(err: any){
    return err.message;
  }
})


export interface VacationsState{
    value:  any[],
    state: 'idle'|'loading'|'failed',
    started: any[],
    notStarted: any[]
}

const initialState: VacationsState = {
    value: [],
    state: 'idle',
    started: [],
    notStarted: []
};

const vacationsSlice = createSlice({
    name: "vacations",
    initialState,
    reducers: {
        setVacations: (state, action)=>{
          state.value = action.payload;
        },
        setStarted: (state, action)=>{
          state.started = action.payload;
        },
        setNotStarted: (state, action)=>{
          state.notStarted = action.payload;
        },
        addVacation: (state, action)=>{
            state.value.push(action.payload);
        },
        editVacation: (state, action)=>{
          const oldVacationIndex = state?.value.findIndex((item: Vacation)=> item._id === action.payload.id);
          state.value[oldVacationIndex] = {
            _id: action.payload.id,
            vacationDestination : action.payload.updatedVacation.vacationDestination,
            vacationDescription : action.payload.updatedVacation.vacationDescription,
            startDateVacation   : action.payload.updatedVacation.startDateVacation,
            endDateVacation     : action.payload.updatedVacation.endDateVacation,
            vacationPrice       : action.payload.updatedVacation.vacationPrice

          }
        },
        deleteVacation: (state, action)=>{
          state.value = state.value.filter(item=> item._id !== action.payload )
        }
    }
})
export const {setVacations, addVacation, editVacation, deleteVacation, setNotStarted, setStarted} = vacationsSlice.actions;
export const currentVacations = (state: RootState)=> state.reducers.vacations.value;
export const currentVacationState = (state: RootState)=> state.reducers.vacations.state;
export default vacationsSlice.reducer;