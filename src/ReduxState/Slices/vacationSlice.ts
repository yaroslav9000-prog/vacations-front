import {createSlice} from "@reduxjs/toolkit";
import { Vacation } from "../../Models/Vacation";

export interface VacationsState{
    value: Vacation[] | null,
    state: 'idle'|'loading'|'failed'
}

const initialState: VacationsState = {
    value: null,
    state: 'idle'
};

const VacationsSlice = createSlice({
    name: "Vacation",
    initialState,
    reducers: {

    },
    extraReducers: builder=>{
        builder.addCase
    }
})
export {}

