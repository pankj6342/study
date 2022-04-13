const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const Question = new Schema(
    {
        question: {type: Schema.Types.String},
        title: {type: Schema.Types.String},
        answers: [{type:Schema.Types.ObjectId, ref: 'Answer'}],
        topics: [{type:Schema.Types.String}],
        askedBy: {type:Schema.Types.ObjectId, ref: 'User'},
        upvotes: {type:Schema.Types.Number, default:0}
    }
)
module.exports = mongoose.model('Question', Question);