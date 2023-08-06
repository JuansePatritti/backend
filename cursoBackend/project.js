// import {express} from Express
// console.log("Hola mundo");
// console.log("que tal?");
// const http= require('http')
// const server = http.createServer((req, resp)=>{
//     const time= new Date()
//     const now= time.getHours()
//     if (now>=6 && now<=12) {
//         resp.end(`Buenos días, son las ${now}`)
//     }
//     else if(now>12 && now<=19){
//         resp.end(`Buenas tardes, son las ${now}`)
//     }
//     else{
//         resp.end(`Buenas noches, son las ${now}`)
//     }

//     console.log(now);


// })

// const connectedServer= server.listen(8080,()=>{
//     console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`);
// })

const express = require("express")
const app = express()
const PORT = 8080
let visitas=0
const fs=require ('fs')
const { get } = require("http")
const path="productos.txt"


async function getObjects(){
    try {
      const data=await fs.promises.readFile(path,'utf-8')
      return data ? JSON.parse(data) : undefined
    } catch (error) {
    return undefined
    }
   }
// PATHS - ENDPOINTS


app.get("/", (req,res)=>{
    res.send("Bienvenidos a mi servidor con Node y Express")
})
app.get("/products", async (req,res)=>{
    const data= await getObjects()
    res.send(data)
})
app.get("/product", async (req,res)=>{
    const random=Math.trunc(Math.random() * (6 - 1) + 1);
    const asd= await getObjects()
    res.send(asd[random])
})
app.get("*", (req,res)=>{
    res.send("Error 404. Not Found")
})

const server = app.listen(PORT,()=>{
    console.log("Escuchando el server");
})

server.on("error", error => console.log(`error en el servidor ${error}`))
