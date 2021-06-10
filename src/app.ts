import express from "express"
import dotenv from  "dotenv"
import mongoose from "mongoose"
import {json,urlencoded} from "body-parser"
import http from "http"
import { userRoutes } from "./api/routes/user.route";

dotenv.config();

mongoose.connect(`${process.env.MONGO_URL}`, {
  useCreateIndex: true,
  useNewUrlParser:true,
  useUnifiedTopology:true
})
const app = express();

const port = process.env.PORT


app.use(json());
app.use(urlencoded({ extended: true }))
app.use(userRoutes);



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is running');
});

http.createServer(app).listen(port,()=>{
  console.log(`Server is running at ${port}`)
})


