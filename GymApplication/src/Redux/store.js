import { configureStore   } from "@reduxjs/toolkit";
import workOutReducer from "./workoutSlice"
import  MuscleReducer  from "./musccleSlice";
import  selectedDatareducer  from "./selectedMusWorkout";


const store = configureStore({
    reducer: {
        workout:workOutReducer,
        user:MuscleReducer,
        selectData:selectedDatareducer,
    }
})

export default store