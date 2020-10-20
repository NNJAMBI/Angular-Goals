const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create Schema
let goalsSchema = new Schema({
    name: String,
    description: String,
    completeDate: {type: Date }})

let Goal = mongoose.model('Goal', goalsSchema)

module.exports = Goal;