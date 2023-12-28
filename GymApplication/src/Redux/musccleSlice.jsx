import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import Axios from "axios"



export const getMuscles = createAsyncThunk('user/getMuscles',async ()=>{
   try{
        const response =  await Axios.get("http://localhost:8081/muscles")
        const resArrayJson = []
        response.data.map((items)=>{
        const Data = {
            "Mus_id" : items.Mus_id,
            "Muscle_Name" :items.Muscle_Name,
            "check":false
        }
            resArrayJson.push(Data)
            })
     return resArrayJson
   }catch(err){
    console.log(err)
   }
   
})

const muscleSlice =  createSlice({
    name:"muscles",
    initialState:{
        isLoading: false,
        muscles:[],
        error:false
    },
    extraReducers:(builder) => {
       builder.addCase(getMuscles.pending,(state,action)=>{
            state.isLoading = true;
       });
       builder.addCase(getMuscles.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.muscles = action.payload
       });
       builder.addCase(getMuscles.rejected,(state,action)=>{
            state.error = true;
       });

    },
    reducers:{
       checkMuscle:(state,action)=>{    // this reducer is used update the state after the slecting the muscle
          state.muscles = action.payload
        }
    }
})

export const {checkMuscle } = muscleSlice.actions;
export default  muscleSlice.reducer
