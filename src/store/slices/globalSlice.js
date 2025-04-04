import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "globalSlice",
    initialState: {
        language: "en-US"
    },
    reducers: {
        changeLng(state, action) {
            state.language = action.payload
        }
    }
})

export const { changeLng } = globalSlice.actions
export default globalSlice.reducer