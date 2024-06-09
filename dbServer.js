import express from 'express';
import dotenv from "dotenv"
import mysql from "mysql2"

const app = express();

// cosnt host= process.env.DB_HOST,
// user= process.env.DB_USERNAME,
// password= process.env.DB_PASSWORD,
// database= process.env.DB_DATABASE,

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})