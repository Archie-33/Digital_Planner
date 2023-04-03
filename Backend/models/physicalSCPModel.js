const {Schema, model} = require('../connection');

const PhysicalSchema = new Schema ({
    activity: {
        type: String,
        required: true,
    },
    first: {
        type: String
    },
    second: {
        type: String
    },
    third: {
        type: String,
    },
    fourth: {
        type: String,
    },
    fifth: {
        type: String,
    },
    sixth: {
        type: String,
    },
    seventh: {
        type: String,
    },
})

const physicalSCPModel = model("physicalSCPModel", PhysicalSchema);
module.exports = physicalSCPModel;