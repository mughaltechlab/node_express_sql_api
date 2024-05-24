// const mysql = require('mysql2');
import mysql from "mysql2"

const pool = mysql.createPool({
    host: '127.0.0.1',
    // host: 'localhost',
    user: 'root',
    password: '',
    database: 'easymeet'
}).promise()

// pool.query("SELECT * FROM user_types")
// .then(res => console.log(res[0]))

async function getUsersType(){
    const result = await pool.query("SELECT * FROM user_types");
    return result;
}

const userType = await getUsersType();
console.log(userType);