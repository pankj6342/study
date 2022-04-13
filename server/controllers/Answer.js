const User = require("../models/Answer.js");

const createAnswer = async (req, res) => {
    try {
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
const getAnswer = async (req,res) => {
    try {
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

module.exports = { createAnswer, getAnswer };