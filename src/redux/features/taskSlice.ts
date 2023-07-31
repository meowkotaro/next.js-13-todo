import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StateType = {
    taskId: string
    title: string
}

const initialState: StateType = {
    taskId : "",
    title : ""
}

const task = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTask: (state, actions: PayloadAction<StateType>) => {
            state.taskId = actions.payload.taskId
            state.title = actions.payload.title
        },
        reset: (state: StateType) => {
            state.taskId = ''
            state.title = ''
        },
        setTitle: (state, actions : PayloadAction<string>) => {
            state.title = actions.payload
        }
    }
})

export default task.reducer
export const { setTask , reset, setTitle } = task.actions