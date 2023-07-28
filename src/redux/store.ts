import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/modalSlice'
import loginUserReducer from './features/userSlice'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        loginUser: loginUserReducer
    }
})

export type Dispatch = typeof store.dispatch
export type State = ReturnType<typeof store.getState>
