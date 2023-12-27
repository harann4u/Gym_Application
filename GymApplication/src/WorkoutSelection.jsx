import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {selectedworkout,selectedMuscle} from "./Redux/selectedMusWorkout.js"

import { useNavigate } from 'react-router-dom'



export const WorkoutSelection = () => {
  const muscleName = useSelector((state)=> state.workout) 
  const selectedMuscleList = useSelector((state)=>state.selectData)
  const selectedworkoutList = useSelector((state)=>state.selectData)
  const workoutData =  useSelector((state)=> state.workout)
  const [listData , setListData] = useState([]);
  // const [checkWorkoutData,setcheckWorkoutData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var extractData = []


 const  getworkoutNames = (id)=>{
      extractData = [];
      extractData =  selectedworkoutList.workoutNames.filter((items)=>{
        return  items.Mus_id == id
       })
        return extractData
  }
 const handleCheck = (id)=>{
  
 }
 
 const handleWorkoutSub = ()=>{
  event.preventDefault();
 }

  return (
    <div>
        <div className='button-muscle-flexContainer'>
              {selectedMuscleList.musclesNames.map((items)=>(
                    <div>
                      <button className='button_name'onClick={()=> setListData(getworkoutNames(items.Mus_id))} >{items.Muscle_Name}</button>
                    </div>
              ))}
        </div>
        <div className='ListData'> 
          <ul>
          {listData.map((items)=>(
            <li className='item' key = {items.Wok_id}>
                 <input 
                 type="checkbox"
                //  checked = {items.check} 
                 onChange={() => handleCheck(items.Wok_id)}
                 />
                 <label for="checkbox-18">{items.Workout_Name}</label>
            </li>
             
          ))}
          </ul>
        </div>
        <div id = "wortoutName-button">
                <form onSubmit={()=> handleWorkoutSub()}>   
                    <div >
                         <button  type="submit">Next</button>
                    </div>      
                </form>
            </div>
    </div>
  )
}
