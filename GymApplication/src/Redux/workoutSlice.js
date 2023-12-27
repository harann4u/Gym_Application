import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import Axios from "axios"


export const getWorkoutList =  createAsyncThunk('get/workoutNames',async ()=>{
    try{
         const response =  await Axios.get("http://localhost:8081/workoutNames")
         const resArrayJson = []
         response.data.map((items)=>{
         const Data = {
             "Mus_id" : items.Mus_id,
             "Wok_id" :items.Wok_id,
             "Workout_Name":items.Workout_Name,
             "check": false
         }
             resArrayJson.push(Data)
             })
      return resArrayJson
    }catch(err){
     console.log("errorAxiosData",err)
    }
    
 })

 const workoutSlices =  createSlice({
    name:"workoutNames",
    initialState:{
        isLoading: false,
        workoutNames:[],
        error:false
    },
    extraReducers:(builder) => {
       builder.addCase(getWorkoutList.pending,(state,action)=>{
            state.isLoading = true;
       });
       builder.addCase(getWorkoutList.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.workoutNames = action.payload
       });
       builder.addCase(getWorkoutList.rejected,(state,action)=>{
            state.error = true;
       });

    },
})
 
// export const {checkMuscle } = muscleSlice.actions;
export default  workoutSlices.reducer