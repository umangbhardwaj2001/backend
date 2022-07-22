const express = require("express")
const port = process.env.PORT || 3000
const path = require("path")

const app = express();
app.use(express.static('views'));

app.get('/',(req,res)=>{
    res.sendFile('views/index.htm',{root : __dirname})
})
app.get('/about',(req,res)=>{
    res.sendFile('views/about.htm',{root : __dirname});
})
app.get('/about-me',(req,res)=>{
    res.redirect('/about');
})
app.use((req,res)=>{
    res.sendFile('views/404.htm',{root : __dirname});
})


app.listen(port,(err)=>{
    if(err)
        console.log('error',err);
    console.log('RUNNING AT PORT NUMBER',port);
})