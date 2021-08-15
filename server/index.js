import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(express.json({limit: "40mb" , extended: true}));
app.use(express.urlencoded({limit: "40mb" , extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/',(req,res)=> {
    res.send('APP IS RUNNING');
});

const CONNECTION_URL = 'mongodb+srv://MyLearnerProject:<Password>@cluster0.d99lt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))   
    .catch((error)=> console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);