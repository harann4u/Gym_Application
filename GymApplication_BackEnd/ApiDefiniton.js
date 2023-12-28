import  db  from './DBConnection.js';
import mysql from "mysql";
import promise from "promise";

const fetchMuscle = ()=>{
       return new promise ((resolve ,rejects)=>{
            const sql = "select * from Muscle";
            console.log("comming",db)
            db.query(sql,(err,data)=>{
                if(err) throw err;
                resolve (data)
            })
       })
}

const fetchWorkout = (request)=>{
    return new promise((resolve,reject)=>{
         const id = [1,2,3]
        const sql = "select * from workoutName"
        db.query(sql,[id],(err,data)=>{
            if(err) throw err;
            resolve (data)
        })
    })
}

export default  { fetchMuscle,fetchWorkout };  