import {createSlice } from "@reduxjs/toolkit"
import Axios from "axios"

const initialState = {
    workoutNames:[],
    musclesNames:[]
}
export const selectedDataslice = createSlice({
    name:"selectData",
    initialState,
    reducers:{
        selectedworkout:(state,action) =>{
            return {
                ...state,
                workoutNames: [...state.workoutNames, ...action.payload]
               }
            
        },
         selectedMuscle:(state,action) =>{
                state.musclesNames = action.payload
            }
    }

}) 
export const {selectedworkout , selectedMuscle} = selectedDataslice.actions;
export default selectedDataslice.reducer;