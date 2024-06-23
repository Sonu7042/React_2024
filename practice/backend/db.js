const mongoose = require('mongoose');

const link = "mongodb+srv://admin:H9dt0eR0szwVDpnm@cluster0.xaw7ayt.mongodb.net/"

const mongoConnect = () => {
  mongoose.connect(link)
    .then(function () {
      console.log('MongoDB Connected Successfully')

    })

    .catch(function (error) {
      console.log(error)
    });


}
module.exports = mongoConnect









// const mongoose=require('mongoose')


// const link = "mongodb+srv://admin:RSB0phHI78FAAb6H@cluster0.6qegdyn.mongodb.net/"

// // const mongoConnect=()=>{
//     mongoose.connect(link)
//     .then(function(){
//         console.log("db is connected")
//     })
//     .then(function(err){
//         console.log(err)
//     })
// // }

// // module.exports=mongoConnect