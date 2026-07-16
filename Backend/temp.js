import express from "express";
const app=express();
//1
import http from "http";
//2
import socketIot from "socket.io";
//3
import socketHandler from "./socket/socketHandler.js";

//1
const server=http.createServer(app)
//2
const io=socketIo(server,{cors:{origin:"*"}})

//3
socketHandler(io);


app.get('/',(req,res)=>{
    return res.status(200).json({message:"Hey its listning from server"})
})

server.listen(2321,()=>{
    console.log('server listening at port 3000');
})