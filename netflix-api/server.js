const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require("./routes/UserRoutes");
const { addToLikedMovies } = require('./controller/UserController');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/netflix')
.then(() => console.log("DB connected"));
app.use('/api/user', userRoutes);

app.listen(5000, ()=>{
    console.log("Server started at port 5000")}
)
