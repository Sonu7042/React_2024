const express=require('express')
const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello I am leaning..")
})

app.post('/',(req,res)=>{
    const user=req.body
    console.log(user)
    res.send("Data is successfully Saved")
})




app.listen(3000,()=>{
    console.log("server is listening")
})
