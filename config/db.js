const  mongoose= require("mongoose")

function connect(){
    mongoose.connect("mongodb+srv://sheetalraghav0818_db_user:12345@cluster0.bbrgomt.mongodb.net/?appName=Cluster0")
    .then(()=>{
        console.log("database connected successfully")
    })
    .catch((err)=>{
        console.log("something went wrong:",err)
    })
}

module.exports=connect;