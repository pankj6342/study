const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const bcrypt = require('bcrypt')

const Moderator = new Schema(
    {
        name: {type: Schema.Types.String},
        username: {type: Schema.Types.String},
        password: {type: Schema.Types.String},
        rating: {type: Schema.Types.Number, default: 0},
        about: {type: Schema.Types.String},
    }
)
Moderator.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(this.password, salt);
        this.password = hashedPass;
        next();
    } catch (error) {
        console.log(error.message);
    }
})
module.exports = mongoose.model('Moderator', Moderator);