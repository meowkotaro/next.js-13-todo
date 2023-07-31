import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/modalSlice'
import loginUserReducer from './features/userSlice'
import addTaskModalSlice from "./features/addTaskModalSlice";
import TaskReducer from './features/taskSlice'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        addTaskModal: addTaskModalSlice,
        loginUser: loginUserReducer,
        Task: TaskReducer,
    }
})

export type Dispatch = typeof store.dispatch
export type State = ReturnType<typeof store.getState>
