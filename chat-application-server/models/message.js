
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    content:String,
    sender: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    chat: {
        type: mongoose.Types.ObjectId,
        ref: "Chat",
        required: true
    },
    attachment:[
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }

    ]


}, {
    timestamps: true
})



export const Message = mongoose.model.Message || model("Message", schema);