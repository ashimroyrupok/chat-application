const bcrypt = require('bcrypt')
const User = require('../models/user.js')
const setToken = require("../utils/setToken.js")
const mongoose = require('mongoose')



const newUser = async (req, res) => {
    try {
        const body = req.body;

        const result = await User.create(body)
        console.log(result)
        res.status(200).json({ message: "user created successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

// 
const loginUser = async (req, res) => {
    const body = req.body;
    const result = await User.findOne({ userName: body.userName }).select("+password");
    console.log(result)
    if (result) {
        const isMatch = await bcrypt.compare(body.password, result.password)
        console.log(isMatch)
        if (!isMatch) {

            return res.status(500).json({ message: "invalid credentials" });
        }
        return setToken(res, result)
    } else {
        return res.status(500).json({ message: "invalid user" });
    }
}



module.exports = { newUser, loginUser }