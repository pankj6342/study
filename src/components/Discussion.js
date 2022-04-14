import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import QuesContext from "../context/questionContext";
import AskQuestionModal from "./AskQuestionModal";
import QuestionCard from "./QuestionCard";

const Discussion = () => {
  const port = 5000;
  const context = useContext(QuesContext);
  // const { fetchQuestions, questionArray } = context;
  // const fetchQuestions = context?.fetchQuestions;
  // const questionArray = context?.questionArray;
  const questionArray = [
    {
      _id: "6257274b80020804afa24b08",
      question: "What will be the solution to this.",
      title: "This is question",
      answers: [],
      topics: ["ques", "paper"],
      askedBy: {
        _id: "62572615e2cd81f52341cf2c",
        name: "Pankaj",
        rating: 0,
      },
      upvotes: 0,
    },
    {
      _id: "62572a44e23b3ec7a1b9cc98",
      question: "What will be the solution to this.",
      title: "This is question2",
      answers: [],
      topics: ["ques", "paper"],
      askedBy: {
        _id: "62572615e2cd81f52341cf2c",
        name: "Pankaj",
        rating: 0,
      },
      upvotes: 0,
    },
  ];
  useEffect(() => {
    console.log("discussion");
    // fetchQuestions();
  }, []);
  // const questionArray = [];

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col">
      <div
        id="ask-answer-input"
        className="flex flex-col mx-auto mt-4 w-[50%] border-black p-4 bg-green-400 rounded-xl"
      >
        <div className="w-[90%] dp-input flex justify-between">
          <Link
            id="profile-pic"
            className="h-[50px] w-[50px] rounded-full"
            to="/profile"
          >
            <img
              className=""
              src="https://cdn.codechef.com/sites/default/files/uploads/pictures/9add8f5b7067a81164b7a9116b1dcb79.jpg"
              alt=""
            />
          </Link>

          <input
            type="text"
            className="w-4/5 pl-4"
            placeholder="ask your query"
          />
        </div>
        <div className="flex items-center justify-evenly mt-2 ">
          <AskQuestionModal>
            <div className=" hover:underline hover:cursor-pointer">Ask</div>
          </AskQuestionModal>
          |<div className=" hover:underline hover:cursor-pointer">Answer</div>
        </div>
      </div>
      <div className="w-full border-2 min-h-screen flex flex-col items-center space-y-2 pt-5">
        {questionArray?.length === 0 ? (
          <div>No questions here!</div>
        ) : (
          <div>
            {questionArray?.map((e) => (
              <QuestionCard
                questionText={e.question}
                title={e.title}
                key={e._id}
                quesId={e._id}
                askedBy={e.askedBy}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Discussion;
