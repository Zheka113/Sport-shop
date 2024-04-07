import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkitSlice",
    initialState: {
        isAdmin: false,
        isAuth: false
    },
    reducers: {
        adminAuth(state, data){
            state.isAdmin = data.payload
        },
        authorization(state, data){
            state.isAuth = data.payload
        }
    }
})

export default toolkitSlice.reducer;
export const {adminAuth, authorization} = toolkitSlice.actions;