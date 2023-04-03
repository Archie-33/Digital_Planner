const {Schema, model} = require('../connection');

const MentalSchema = new Schema ({
    activityM: {
        type: String,
        required: true,
    },
    firstM: {
        type: String
    },
    secondM: {
        type: String
    },
    thirdM: {
        type: String,
    },
    fourthM: {
        type: String,
    },
    fifthM: {
        type: String,
    },
    sixthM: {
        type: String,
    },
    seventhM: {
        type: String,
    },
})

const mentalSCPModel = model("mentalSCPModel", MentalSchema);
module.exports = mentalSCPModel;