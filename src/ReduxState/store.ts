import {combineReducers, configureStore} from "@reduxjs/toolkit";


//I need reducers for vacation list
//Regular user will be able to follow and unfollow vacation
//Since that i need state management for followed vacations
//Admin user can add vacation to a total number of vacations
//Admin can edit the vacation since that i need to update state list of current vacation and send request of update to a server.
//I need reducer for users auth



const reducers = combineReducers({vacations: vacationReducer, user: userReducer});

export const store = configureStore({
    reducer: {reducers},
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck: false})
})
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>