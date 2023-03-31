const {Schema, model} = require('../connection');

const ExamSchema = new Schema ({
    course: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    preparation: {
        type: String,
    },
})

const examModel = model("examModel", ExamSchema);
module.exports = examModel;