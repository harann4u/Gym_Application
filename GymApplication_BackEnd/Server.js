const express = require('express');
const cors = require('cors') 
const app = express();
const APiDefinition = require('./ApiDefiniton')
const  database = require('./DBConnection');

app.use(cors())
  app.get('/',(req,res)=>{
    return res.json("from backend side");
 })

app.get('/muscles',async (req,res)=>{
    try{
      const response = await  APiDefinition.fetchMuscle()
      res.send(response)
    } catch(err){
      console.log("Error: " + err);
    }
    
})

app.get('/workoutNames',async (req,res)=>{
   try{
      const response = await APiDefinition.fetchWorkout(req)
      res.send(response)
   }catch(err){
    console.log("Error: " + err);
   }
})

  app.listen(8081,()=>{
    console.log("Listening")
  })

