const User = require('../models/user.js')
const setToken=require("../utils/setToken.js")



const newUser = async (req, res) => {
    try {
        console.log(setToken)
        const body = req.body;

        const result = await User.create(body)
        console.log(result)
        setToken(res,result)
        // res.status(200).json({ message: "user created successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }


}



module.exports = newUser