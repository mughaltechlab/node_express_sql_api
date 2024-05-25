// const mysql = require('mysql2');
import mysql from "mysql2"
import dotenv from "dotenv"


dotenv.config()
console.log('----------------------------------------')
console.log('----------------------------------------')
console.log('----------------------------------------')
console.log('----------------------------------------')
console.log(process.env.HOST);
console.log(process.env.USERNAME);
console.log(process.env.PASSWORD);
console.log(process.env.DATABASE);
console.log('----------------------------------------')
console.log('----------------------------------------')
console.log('----------------------------------------')
console.log('----------------------------------------')



const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // host: '127.0.0.1',
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'easymeet',

}).promise()


pool.query("SELECT * FROM user_types")
.then(res => console.log(res))



// get all users
async function getUsersType(){
    const result = await pool.query("SELECT * FROM user_types");
    return result;
}

// get user by id
async function getUserById(id){
    const result = await pool.query(`SELECT * FROM user_types WHERE id = ${id}`);
    return result
}

// Create User

const userType = await getUsersType();
const userTypeById = await getUserById(1);

console.log(userTypeById);

// [
//     {
//         id: 1,
//         name: 'admin',
//         active: 0,
//         created_at: 2024-04-30T19:00:00.000Z,
//         updated_at: 2024-05-01T19:00:00.000Z
//     }
// ],
