const {Schema, model} = require('../connection');

const ExpenseSchema = new Schema ({
    dateexp: {
        type: String,
    },
    item: {
        type: String,
        required: true,
    },
    categ: {
        type: String,
        required: true,
    },
    amt: {
        type: String,
        required: true,
    },
})

const expenseModel = model("expenseModel", ExpenseSchema);
module.exports = expenseModel;