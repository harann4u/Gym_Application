import { useEffect, useState } from 'react'
import './App.css'
import { Header } from "./Header.jsx"
import {ExerciseHeader} from "./ExerciseHeader.jsx"
import { WorkoutNames } from './WorkoutNames.jsx'
import { WorkoutSelection } from './WorkoutSelection.jsx'
import {getMuscles, checkMuscle} from "./Redux/musccleSlice.jsx"
import {getWorkoutList } from "./Redux/workoutSlice.js"
import { useDispatch,useSelector } from 'react-redux'
import { Route,Routes } from 'react-router-dom'
import _ from 'lodash';


function App() {
  const dispatch = useDispatch();

  useEffect( ()=>{
    dispatch(getMuscles())
    dispatch(getWorkoutList())
  },[])

  return (
       <div className="GymApp">
           <Header title = "Gym Management System" />  
            <main>
                {/* <ExerciseHeader title = "Exercise"/>  */}
                  <Routes>
                    <Route path= "/" element = {<WorkoutNames/>}/>
                    <Route path= "/workoutSelection" element = {<WorkoutSelection/>}/>
                  </Routes>
            </main>
       </div>
       
     
  )
}

export default App
