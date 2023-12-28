import express from 'express';
import cors from 'cors'; 
const app = express();
import ApiData from './ApiDefiniton.js';
// import database from './DBConnection.js';

app.use(cors())
  app.get('/',(req,res)=>{
    return res.json("from backend side");
 })

app.get('/muscles',async (req,res)=>{
    try{
      const response = await  ApiData.fetchMuscle()
      res.send(response)
    } catch(err){
      console.log("Error: " + err);
    }
    
})

app.get('/workoutNames',async (req,res)=>{
   try{
      const response = await ApiData.fetchWorkout(req)
      res.send(response)
   }catch(err){
    console.log("Error: " + err);
   }
})

  app.listen(8081,()=>{
    console.log('Listening on port');
  })
  

