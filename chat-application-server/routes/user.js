const express = require("express");
const app = express.Router();
const {newUser,loginUser}= require("../controllers/user.js")
const multerUploader = require("../middlewares/multer");


app.post('/new',multerUploader.single("avatar"),newUser )
app.get('/login', loginUser )



module.exports= app;