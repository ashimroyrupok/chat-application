const User = require('../models/user.js')



const newUser = async (req, res) => {
    try {

        const body = req.body;

        const result = await User.create(body)
        res.status(200).json({ message: "user created successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }


}



module.exports = newUser