import { createSlice } from "@reduxjs/toolkit";

type StateType = {
    isOpen: boolean
}

const initialState: StateType = {
    isOpen : false,
}

const addTaskModal = createSlice({
    name: 'addTaskModal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    }
})

export default addTaskModal.reducer
export const { openModal, closeModal } = addTaskModal.actions