import React from "react";
import { Link } from "react-router-dom";

const Card = (title) => {
  const courseData = { courseId: "", courseName: "Data Structures" };

  return (
    <div className="border  bg-white  flex flex-col border-1 h-[90%] w-[70%] rounded-xl">
      <div className="text-4xl pl-5 py-2 bg-blue-400 font-bold rounded-t-xl ">
        {title}
      </div>
      <div
        id="progress-bar"
        className="ml-5 mt-2 w-[90%] border-2 bg-white rounded-sm"
      >
        <div className="w-[69%] h-[4px] bg-gray-700"></div>
      </div>
      <span className="ml-5 text-gray-700 text-xl mt-5">69% completed</span>
      <Link
        to={`/courses/${courseData.courseId}`}
        className="ml-5 p-1 bg-green-600 w-[150px] rounded-2xl text-center mt-5 text-white shadow-md font-bold hover:cursor-pointer hover:underline "
      >
        Continue
      </Link>
    </div>
  );
};

export default Card;
