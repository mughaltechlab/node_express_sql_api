// const mysql = require('mysql2');
import mysql from "mysql2"
import dotenv from "dotenv"


dotenv.config()
console.log('----------------------------------------')
console.log('----------------------------------------')
console.log('----------------------------------------')
console.log('----------------------------------------')
// console.log(process.env.HOST);
console.log(process.env.USERNAME);
console.log(process.env.DB_USERNAME);
// console.log(process.env.PASSWORD);
// console.log(process.env.DATABASE);
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

console.log('----------------------------');
console.log('----------------------------');
console.log('----------------------------');
console.log('----------------------------');



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
async function createUserFunc(){
    const result = await pool.query(`INSERT INTO user_types(name, active) VALUES ('test7','0')`);
    return result
}

const userType = await getUsersType();
const userTypeById = await getUserById(1);
const createUser = await createUserFunc();

console.log(createUser);

// INSERT INTO `user_types`(`id`, `name`, `active`, `created_at`, `updated_at`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]')

// [
//     {
//         id: 1,
//         name: 'admin',
//         active: 0,
//         created_at: 2024-04-30T19:00:00.000Z,
//         updated_at: 2024-05-01T19:00:00.000Z
//     }
// ],
// [
//     `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     `name` VARCHAR(50) NOT NULL,
//     `active` TINYINT(1) NOT NULL,
//     `created_at` TIMESTAMP(19) NOT NULL,
//     `updated_at` TIMESTAMP(19) NOT NULL
//   ]
