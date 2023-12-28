import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {selectedworkout,selectedMuscle} from "./Redux/selectedMusWorkout.js"
import { useNavigate } from 'react-router-dom'
import _ from 'lodash';

export const WorkoutSelection = () => {
  const muscleName = useSelector((state)=> state.workout) 
  const selectedMuscleList = useSelector((state)=>state.selectData)
  const selectedWorkoutList = useSelector((state)=>state.selectData)
  const [listData , setListData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var extractData = []
  const [workoutList,setworkList] = _.cloneDeep(selectedWorkoutList.workoutNames);
  

 const  getworkoutNames = (Musid)=>{
      extractData = [];
      extractData =  workoutList.filter((items)=>{
        return  items.Mus_id == Musid
       })
        return extractData
  }
 const handleCheck = (id)=>{
  const Data = listData.map((item)=>(
    item.Wok_id === id ?{...item, check:!item.check} : item)
   )
   setListData(Data)
   console.log("ListData",listData)
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
                 id = {items.Wok_id}
                 type="checkbox"
                 onChange={() => handleCheck(items.Wok_id)}
                 checked = {items.check} 
                 />
                 <label >{items.Workout_Name}</label>
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
