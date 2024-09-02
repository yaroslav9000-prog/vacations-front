import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import vacationReducer from "./Slices/vacationSlice";
import userReducer from "./Slices/authSlice";
import followReducer from "./Slices/followedVacations"
//I need reducers for vacation list
//Regular user will be able to follow and unfollow vacation
//Since that i need state management for followed vacations
//Admin user can add vacation to a total number of vacations
//Admin can edit the vacation since that i need to update state list of current vacation and send request of update to a server.
//I need reducer for users auth



const reducers = combineReducers({vacations: vacationReducer, user: userReducer, follows: followReducer});

export const store = configureStore({
    reducer: {reducers},
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck: false})
})
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
