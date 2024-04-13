const express = require("express");
const app = express.Router();
const newUser= require("../controllers/user.js")
const multerUploader = require("../middlewares/multer");


app.post('/new',multerUploader.single("avatar"),newUser )
app.post('/login', )



module.exports= app;