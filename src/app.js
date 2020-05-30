const path=require("path")
const http=require("http")
const express=require("express")

const socketio=require("socket.io")



const app=express()
const server=http.createServer(app)

const io=socketio(server)

const port=process.env.PORT || 4000
const publicDirPath=path.join(__dirname,"../public")

app.use(express.static(publicDirPath))

io.on('connection',(socket)=>{
  console.log("new connection");
  socket.emit('butclick')
  
})
server.listen(port, ()=>{
  console.log("server is up in ${port}");
  
})