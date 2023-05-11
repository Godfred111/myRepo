const express = require('express')
const app =express();


app.set('view-engine','ejs')










app.get('/',(req,res)=>{
    //res.send('<h1>Now using express</h1>')
    res.sendFile('./views/index.html',{root:__dirname})
})


app.get('/about',(req,res)=>{
    res.send('<h1> Now in bout</h1>')
})

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})



app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname})
})



