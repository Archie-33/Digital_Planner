const {Schema, model} = require('../connection');

const Todo2Schema = new Schema ({
    todo2: {
        type : String,
        required: true,
    }
   })

const todo2Model = model("todo2Model", Todo2Schema);
module.exports = todo2Model;