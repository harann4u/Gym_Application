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
            },
            checkedWorkout:(state,action)=>{
                console.log("actionData",action.payload)
                state.workoutNames = action.payload
            }
    }

}) 
export const {selectedworkout , selectedMuscle,checkedWorkout} = selectedDataslice.actions;
export default selectedDataslice.reducer;