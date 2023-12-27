const  database = require('./DBConnection');
const mysql = require("mysql");
const promise = require("promise")

const fetchMuscle = ()=>{
       return new promise ((resolve ,rejects)=>{
            const sql = "select * from Muscle ";
            database.db.query(sql,(err,data)=>{
                if(err) throw err;
                resolve (data)
            })
       })
}

const fetchWorkout = (request)=>{
    return new promise((resolve,reject)=>{
         const id = [1,2,3]
        const sql = "SELECT * FROM WorkOutName"
       
        database.db.query(sql,[id],(err,data)=>{
            if(err) throw err;
            resolve (data)
        })
    })
}

module.exports = { fetchMuscle,fetchWorkout };  