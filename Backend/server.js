import db from "./config/db.js";
import express from "express";
import http from "http"; 
import cors from "cors";
import { Server } from "socket.io";
import socketHandler from "./socket/socketHandler.js";
const app= express();
import bodyparser from "body-parser";
import studentRoutes from "./routes/studentRoutes.js";
import candidateRoutes from "./routes/candidateRoute.js";
import voteRoutes from "./routes/voteRoute.js";
import cookieParser from "cookie-parser";

app.use(bodyparser.json()); //used for reading data from body

app.use(cors({
    origin:'http://localhost:5173', //this is the origin url from where we are recieving/sending all the requests
    credentials:true //we have set it true because we are sending cookies data from frontEnd
}));

app.use(cookieParser());

//http server create
const server=http.createServer(app)
const io=new Server(server,{cors:{origin:'*'}})

//initialize socketHandler
socketHandler(io)

import { Socket } from "socket.io";


const PORT=process.env.PORT// used for recieving dynamic port set for cloud platform and if not then use default port 3000

app.get('/',(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"App started successfully"
    })
});

app.use('/student', studentRoutes);
app.use('/candidate', candidateRoutes);
app.use('/vote', voteRoutes);
app.use('/votingEvents',candidateRoutes)
app.use('/result',voteRoutes)

//use for publishing port
server.listen(PORT ,()=>{
    console.log(`Server running at port http://localhost:${PORT}`)
}) 