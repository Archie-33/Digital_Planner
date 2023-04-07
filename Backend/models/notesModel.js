const {Schema, model} = require('../connection');

const NotesSchema = new Schema ({
    header: {
        type: String,
        required: true,
    },
    note8: {
        type: String,
        required: true,
    },
})

const notesModel = model("notesModel", NotesSchema);
module.exports = notesModel;