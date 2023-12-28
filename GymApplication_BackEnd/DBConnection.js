import { createConnection } from 'mysql';

const db = createConnection({
    host:"localhost",
    user:'root',
    password:'password',
    database:'GymManagement'
})

db.connect((err) =>{
    if(err) throw err;
    console.log("connected");
});


// con.end();
export default    db  ;