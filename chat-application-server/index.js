require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const connectDB = require("./DB/connectDB.js")

const userRoute = require("./routes/user.js")

const http = require('http');
const serverIo = require("socket.io");
const httpServer = http.createServer(app);
const io = serverIo(httpServer, {
    cors: {
        origin: "http://localhost:3000", // your Next.js app URL
        methods: ["GET", "POST"],
        credentials: true
    }
});



// middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true

}))

// 


io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('message', (message) => {
        console.log('Received message:', message);
        io.emit('message', message); // Broadcast the message to all clients
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});


// connectDB(process.env.DB_URI)



app.use('/users', userRoute)

app.get('/', (req, res) => {
    res.send("server is running")
})

function errorHandler(err, req, res, next) {
    if (res.headerSent) {
        return next(err)
    }
    res.status(500).json({ message: err })

}

app.use(errorHandler)

httpServer.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})