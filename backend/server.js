const express=require('express')
const app=express()
const port=3000
const path = require('path');

app.use(express.json())
app.use(express.static(path.join(__dirname, '../frontend')))

const user={
    username:"admin",
    password:"1234"
}

app.post('/login',(req,res)=>{
    const {username,password}=req.body
    if (username===user.username&& password===user.password){
        res.json({
            success:true,message:"login succesful"
        })
    }else{
        res.json({
            success:'false',message:'invalide credential'
        })
    }




})









// app.get('/', (req,res)=>{
//     res.send('hellos express  fucker server')

// })


app.listen(port,()=>{
    console.log('server is running')
})