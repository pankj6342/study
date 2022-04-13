const Question = require("../models/Question.js");

const createQues = async (req, res) => {
    try {
        const question = req.body.question;
        const title = req.body.title;
        const askedBy = req.body.askedBy;
        const topics = req.body.topics;
        const ques = new Question({ question, title, askedBy, topics });
        ques.save();
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
const getAllQues = async (req,res) => {
    try {
        const questions = await Question.find({},'question title topics askedBy upvotes').populate('askedBy','name rating').populate('answers');
        res.status(200).json({
            success: true,
            data: questions
        });
    } catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: "Some server error occurred"
        });
    }
}
const getQues = async (req,res) => {
    try {
        const quesId = req.body.quesId;
        const question = await Question.findById(quesId).populate('askedBy','name rating').populate('answers');
        res.status(200).json({
            success: true,
            data: question
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Some server error occurred"
        });
    }

}
// const getAllQuesWithTopic = async (req,res) => {
//     try {
//         const topics = req.body.topics;
//         let data = [];
//         for(let i of topics){
//             const questions = await Question.find({}).populate('askedBy','name rating').populate('answers');

//         }
//         res.status(200).json({
//             success: true,
//             data: questions
//         });
//     } catch (e) {
//         res.status(500).json({
//             success: false,
//             message: "Some server error occurred"
//         });
//     }
// }

module.exports = { createQues, getAllQues, getQues };