const {Schema, model} = require('../connection');

const WorkoutSchema = new Schema ({
    day: {
        type: String,
        required: true,
    },
    bodypart: {
        type: String,
        required: true,

    },
    exercise1: {
        type: String
    },
    exercise2: {
        type: String,
    },
    exercise3: {
        type: String,
    },
    exercise4: {
        type: String,
    },
    exercise5: {
        type: String,
    },
    exercise6: {
        type: String,
    },
})

const workoutModel = model("workoutModel", WorkoutSchema);
module.exports = workoutModel;