const {Schema, model} = require('../connection');

const TotalSchema = new Schema ({
    totali: {
        type: String,
        required: true,
    },
    totals: {
        type: String,
        required: true,
    },
    totald: {
        type: String,
        required: true,
    },
    totalsp: {
        type: String,
        required: true,
    },
})

const totalModel = model("totalModel", TotalSchema);
module.exports = totalModel;