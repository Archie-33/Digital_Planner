const {Schema, model} = require('../connection');

const MealSchema = new Schema ({
    meal: {
        type: String,
        required: true,
    },
    dishName: {
        type: String
    },
    recipe: {
        type: String
    },
    ingredients: {
        type: String,
        required: true,
    },
})

const mealModel = model("mealModel", MealSchema);
module.exports = mealModel;