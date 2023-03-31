const {Schema, model} = require('../connection');

const TermSchema = new Schema ({
    course1: {
        type: String,
        required: true,
    },
    notes: {
        type: String
    },
    credit: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
    },
})

const termModel = model("termModel", TermSchema);
module.exports = termModel;