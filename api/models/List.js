const mongoose = require("mongoose");
const CreateTodoSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
   
    body: {
        type:String,
        required:true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const List = mongoose.model("List", CreateTodoSchema);

module.exports = List;