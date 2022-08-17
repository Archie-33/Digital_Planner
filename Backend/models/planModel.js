const {Schema, model, Types} = require('../connection');

const schemaObject =  new Schema({
    title : String,
    createdBy : {type : Types.ObjectId, ref : 'users'},
    createdAt : Date,
})

module.exports = model('plans', schemaObject);