const {Schema, model} = require('../connection');

const TodoSchema = new Schema ({
    todo: {
        type: String,
        required: true,
    },
    note: {
        type : String,
        default : '',
    }
   })

const todoModel = model("todoModel", TodoSchema);
module.exports = todoModel;