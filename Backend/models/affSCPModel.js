const {Schema, model} = require('../connection');

const AffSchema = new Schema ({
    inspiration: {
        type: String,
        required: true,
    },
    affirmation: {
        type: String,
        required: true,
    },
})

const affSCPModel = model("affSCPModel", AffSchema);
module.exports = affSCPModel;