const mysql = require('mysql');

const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'8421@Hari',
    database:'GymManagement'
})

db.connect((err) =>{
    if(err) throw err;
    console.log("connected");
});





// con.end();
module.exports =   { db } ;