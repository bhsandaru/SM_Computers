const express =require('express')
const mongoose = require('mongoose')
const routeURLs = require('./routes/AddItems')
const dotenv = require('dotenv')
const app = express()
const cors = require ('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS);

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("mongodb connected");
})




app.use(express.json());
app.use(cors());

const additemRouter = require("./routes/AddItems.js");
app.use("/AddItem",additemRouter );

const adduserRouter = require("./routes/AddUsers.js");
app.use("/AddUser",adduserRouter );

app.listen(process.env.PORT, console.log(`'Listening on port ${process.env.PORT} ...`));

