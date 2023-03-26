const {Schema, model} = require('../connection');

const RoutineSchema = new Schema ({
    time: {
        type: String,
        required: true,
    },
    monday: {
        type: String
    },
    tuesday: {
        type: String
    },
    wednesday: {
        type: String,
    },
    thursday: {
        type: String,
    },
    friday: {
        type: String,
    },
    saturday: {
        type: String,
    },
    sunday: {
        type: String,
    },
})

const routineModel = model("routineModel", RoutineSchema);
module.exports = routineModel;