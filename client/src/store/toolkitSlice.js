import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkitSlice",
    initialState: {
        isAdmin: false,
        isAuth: false,
        name: "",
        value: ""
    },
    reducers: {
        adminAuth(state, data){
            state.isAdmin = data.payload
        },
        authorization(state, data){
            state.isAuth = data.payload
        },
        rename(state, data){
            state.name = data.payload
        },
        revalue(state, data){
            state.value = data.payload
        }
    }
})

export default toolkitSlice.reducer;
export const {adminAuth, authorization, rename, revalue} = toolkitSlice.actions;