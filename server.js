const express=require("express")
const bodyparser=require("body-parser")
const morgan=require("morgan")
const cors=require("cors")
const PORT = 5000;

//connect db
const db = require("./config/db")
db();

//app
const app = express();
//middlware
app.use(express.json());
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(morgan("dev"))

//routes
const routes=require("./routes/routes");

app.use("/api/v1/",routes)


app.listen(PORT,() =>{
    console.log(`server at running port ${PORT}`)
})








