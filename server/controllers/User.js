const User = require("../models/User.js");

const createUser = async (req, res) => {
    try {
        console.log(req.body)
        const name = req.body.name;
        const username = req.body.username;
        const password = req.body.password;
        const about = req.body.about;
        if((await User.find({username})).length){
            res.status(400).json({
                success: false,
                message: "Try another username"
            })
            return;
        }
        const user = new User({ name,username,password,about});
        await user.save();
        res.status(200).json({
            success: true,
            message: "Success"
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Some server error occurred"
        });
    }
}
const getUser = async (req,res) => {
    try {
        const username = req.body.username;
        const user = await User.findOne({username},'name username rating about');
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Some server error occurred"
        });
    }
}

module.exports = { createUser, getUser };