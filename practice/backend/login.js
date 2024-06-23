
const user=require('./userSchema')


const postdata=('/',async(req,res)=>{
    const front=req.body
    const userdata= await user.create(front)
    res.send("Data is successfully saved")
})

module.exports=postdata