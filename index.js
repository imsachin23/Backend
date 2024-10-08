require('dotenv').config()
const express = require('express')

const app = express()//variable

const port = 3000

app.get('/', (req, res) => {
  res.send('hello world!')
})
app.get('/instagram',(req,res )=>{
    res.send('yr_s_achin')
})
app.get('/login',(req,res )=>{
    res.send('<h1>pls login at chai aur code</h1>')
})


app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})