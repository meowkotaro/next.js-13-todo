import { createSlice } from "@reduxjs/toolkit";

type LoginUser = {
    id: string | undefined
    email: string | undefined
}

const initialState: LoginUser = {
    id: '',
    email: ''
}

const loginUserSlice = createSlice({
    name: 'loginUser',
    initialState,
    reducers: {
        userReset: () => {
            return {
                id: '',
                email: ''
            }
        },
        updateUser : (state, action) => {
            console.log(action.payload)
            return({
                id: action.payload.id,
                email: action.payload.email
            })
        }
    }
})

export default loginUserSlice.reducer
export const { userReset, updateUser } = loginUserSlice.actions