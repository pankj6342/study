import React from "react";
import { Link } from "react-router-dom";

const QuestionCard = () => {
  return (
    <div className="flex flex-col w-[50%] border-[1px] px-2 bg-gray-200">
      <div className="text-green-800 text-lg w-[70%] hover:cursor-pointer">
        Given an array find the best algorithms to convert it into linked list
      </div>
      <div className="">
        asked by:{" "}
        <Link
          to="/profile"
          className="text-blue-700 underline hover:cursor-pointer"
        >
          Adityabhan Singh
        </Link>
      </div>
      <div className="flex space-x-3">
        <span>6 upvotes</span>
        <span>5 replies</span>
      </div>
    </div>
  );
};

export default QuestionCard;
