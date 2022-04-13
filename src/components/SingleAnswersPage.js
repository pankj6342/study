import React from "react";
import { Link } from "react-router-dom";
import QuestionCard from "./QuestionCard";

const SingleAnswersPage = () => {
  const answers = [
    {
      author: "panda",
      answerText: "I am hungry, how are you?",
      verified: true,
    },
    {
      author: "elephant",
      answerText: "I am fat, how are you?",
      verified: false,
    },
    {
      author: "dog",
      answerText: "I am loyal, how are you?",
      verified: true,
    },
    {
      author: "cat",
      answerText: "I am cute, how are you?",
      verified: false,
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="min-w-screen flex flex-col space-y-2 divide-y-1">
        <QuestionCard />
        {answers.map((e) => (
          <div className="flex flex-col bg-gray-200 p-2 space-y-1">
            <div className="flex space-x-2">
              <Link to="/profile" className="font-bold">
                {e.author}
              </Link>
              <span className="text-green-600">
                {e.verified ? `Verified` : ``}
              </span>
            </div>
            <div className="">{e.answerText}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleAnswersPage;
