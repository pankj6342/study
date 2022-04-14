import React from "react";
import { Link } from "react-router-dom";
import WriteAnswerModal from "./WriteAnswerModal";

const QuestionCard = (quesData) => {
  const { questionText, askedBy, quesId, title } = quesData;

  return (
    <div className="mt-2 flex flex-col border-[1px] px-2 bg-gray-200">
      <Link
        to={`/answers/${quesId}`}
        className="text-green-800 text-lg w-[70%] "
      >
        {title}
      </Link>
      <div className="text-md">{questionText}</div>
      <div className="">
        <Link
          to={`/profile/${askedBy._id}`}
          className="text-blue-700 underline hover:cursor-pointer"
        >
          {askedBy.name}
        </Link>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex space-x-2">
          <span>6 upvotes</span>
          <span>5 replies</span>
        </div>
        <WriteAnswerModal quesData={quesData}>
          {/* <Link to={`/answers/${quesData.quesId}`}> */}
          <button className="rounded-full p-2 bg-blue-400">
            Write an answer
          </button>
          {/* </Link> */}
        </WriteAnswerModal>
      </div>
    </div>
  );
};

export default QuestionCard;
