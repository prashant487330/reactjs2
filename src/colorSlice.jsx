import { createSlice } from "@reduxjs/toolkit"
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"green"
    },
    reducers:{
        colorChange:(state)=>{
           state.color="red";
        }
    }
})
export const {colorChange}=colorSlice.actions;
export default colorSlice.reducer;