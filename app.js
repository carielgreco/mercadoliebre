const express = require("express");
const app = express();
const path = require("path");

//video de playground
//const publicPath = path.resolve(__dirname, './public');
//app.use(express.static(publicPath));

app.use("/public",express.static("public")); 
//app.use(express.static('public')); del profe

const port = process.env.PORT || 3000;


// app.listen(3000,()=> {
//     console.log("Servidor Iniciado")
// })

app.listen(port,()=> {
    console.log("Servidor Iniciado")
})

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})