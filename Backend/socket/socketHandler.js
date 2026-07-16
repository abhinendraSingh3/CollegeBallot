// This file handles when a user connects and disconnects from your app
import resultEvents from "./resultEvent.js";


function socketHandler(io){
    try{
    io.on('connection',(socket)=>{
        console.log("user connectedd",socket.id);

        //load events
        resultEvents(io,socket);

        socket.on('disconnected',()=>{
            console.log("user disconnected",socket.id)
        })
        
    })
}
catch(error){
    return console.log("socketHandler error==> ", error);
    
}
}

export default socketHandler;