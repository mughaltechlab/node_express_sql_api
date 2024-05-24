// import express
import express from 'express';

// import data
import users from './data.json' assert {type: "json"};

// create app
const app = express();

// PORT
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }))

// define our ROUTES

//* get all users
app.get("/api/users",(req,res)=>{
    return res.json(users);
})

//* get user by id
app.route("api/users/:id")
.get((req,res)=>{
    // get id from url
    const id = Number(req.params.id);
    // find id from data/db
    const user = users.find((user)=> user.id === id);
    console.log(user);
    return res.json(user);
})
.patch((req,res)=>{})
.delete((req,res)=>{})

// post 
app.post("/api/users",(req,res)=>{
    const body = req.body;
    console.log("Body", body);
    return res.json({status: 'pending'});
});


// listen this port
app.listen(PORT, ()=> console.log(`Server Started on port : ${PORT}`));