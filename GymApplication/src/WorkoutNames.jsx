import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import _ from 'lodash';
import {getMuscles, checkMuscle} from "./Redux/musccleSlice.jsx"
import {selectedworkout,selectedMuscle} from "./Redux/selectedMusWorkout.js"
import {ExerciseHeader} from "./ExerciseHeader.jsx"


export const WorkoutNames = () => {
    const muscleName = useSelector((state)=> state.user)
    const workoutData =  useSelector((state)=> state.workout)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const chooseMuscle = (id)=>{
        console.log("comming indie")
        const musclesList = _.cloneDeep(muscleName.muscles);
        const checkedMuscelData = musclesList.map((item)=>(
         item.Mus_id === id ?{...item, check:!item.check} : item)
        )
        dispatch(checkMuscle(checkedMuscelData))  
     }

     const handleExerciseSub = ()=>{
        event.preventDefault();
        const  selectmuscelData =  muscleName.muscles.filter((items)=>{
            return items.check == true
        })
        dispatch(selectedMuscle(selectmuscelData)) // sedning only seleced muscle
       var extractData = []
       selectmuscelData.map((muscleitems)=>{
        extractData = workoutData.workoutNames.filter((workoutitems)=>{
            return  muscleitems.Mus_id == workoutitems.Mus_id
           })
           console.log("extract",extractData)
           dispatch(selectedworkout(extractData))
       })

        navigate('/workoutSelection')
  }
    
    
  return (
    <div className='workoutName-submit'>
           <div className="ExerciseP">
                <p >Exercise</p>
           </div>
            <div className = "WorkoutNames">
                    {  muscleName.muscles.map((items,index)=>(  
                        <li  key = {items.Mus_id}>
                            <div className='ck-button'>
                                    <label >     
                                        <input 
                                            type="checkbox" 
                                            onChange={() => chooseMuscle(items.Mus_id) }
                                            checked = {items.check}      /*this line used to check the box */
                                        /> 
                                        <span> {items.Muscle_Name} </span>
                                </label>
                            </div>
                            
                    </li>
                    ))} 
            </div> 
            <div id = "wortoutName-button">
                <form onSubmit={()=> handleExerciseSub()}>   
                    <div >
                         <button  type="submit">Next</button>
                    </div>      
                </form>
            </div>

    </div>
    
  )
}
