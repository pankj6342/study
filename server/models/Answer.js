const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const Answer = new Schema(
    {
        reply: {type: Schema.Types.String},
        answeredBy: {type:Schema.Types.ObjectId, ref: 'User'},
        upvotes: {type:Schema.Types.Number, default:0}
    }
)
module.exports = mongoose.model('Answer', Answer);