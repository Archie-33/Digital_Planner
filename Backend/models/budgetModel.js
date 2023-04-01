const {Schema, model} = require('../connection');

const BudgetSchema = new Schema ({
    income: {
        type: String,
        required: true,
    },
    amti: {
        type: String,
        required: true,

    },
    saved: {
        type: String,
        required: true,
    },
    amts: {
        type: String,
        required: true,
    },
    debt: {
        type: String,
        required: true,
    },
    amtd: {
        type: String,
        required: true,
    },
})

const budgteModel = model("budgetModel", BudgetSchema);
module.exports = budgteModel;