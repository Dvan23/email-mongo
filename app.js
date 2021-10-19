const express = require('express')
const app = express();
app.use(express.urlencoded({extended:false}))
const {connectdb} =require('./Mongo/connection')
const router = require('./Routes/routes')
const {notfound} =require('./Routes/notfound')
require('dotenv').config()
app.use(express.json())

app.use('/',router)

app.get('/middleware',(req,res)=>{
    console.log('middleware')
    res.send('middleware')
})

app.get('/middleware/1',(req,res)=>{
    console.log('middleware1')
    res.send('middleware1')
})
app.use(notfound)

const server = async()=>{
    try{
         await connectdb(process.env.URL)
        app.listen(5000,()=> console.log('Server started'))
    }
    catch(err){
        console.log(err)
    }
}
server()

