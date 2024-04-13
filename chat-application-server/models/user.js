
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
})


schema.pre("save", async function (next) {
    if(!this.isModified("password")) next() ;
    this.password = await bcrypt.hash(this.password, 10)
})


const User = mongoose.model.User || mongoose.model("User", schema);

module.exports = User;