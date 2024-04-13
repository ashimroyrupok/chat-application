require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const connectDB = require("./DB/connectDB.js")

const userRoute = require("./routes/user.js")

app.use(express.json());
app.use(cors({
    origin:[

    ]
}))


console.log(process.env.DB_URI)
connectDB(process.env.DB_URI)



app.use('/users' ,userRoute)

app.get('/', (req, res) =>{
    res.send("server is running")
})

function errorHandler(err,req,res,next){
    if(res.headerSent){
        return next(err)
    }
    res.status(500).json({message:err})

}

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})