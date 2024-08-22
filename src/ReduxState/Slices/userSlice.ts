import {createSlice} from "@reduxjs/toolkit";
import { User } from "../../Models/User";

const initialState = <User>{};

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {}
})