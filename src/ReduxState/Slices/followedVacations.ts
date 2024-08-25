import { createSlice } from "@reduxjs/toolkit";
import { Vacation } from "../../Models/Vacation";

interface FollowedVacas {
    followed: Vacation[] | [] | null;
}
// const initialValue
// const followedSlice = createSlice({
//     name: 'followed',

// })