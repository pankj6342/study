import React from "react";
import Card from "./Card";

const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div
        id="header"
        className="min-w-screen text-center flex flex-col items-center justify-center text-white text-3xl p-auto bg-gray-600 h-[100px]"
      >
        Hello Adityabhan Singh, Welcome !!
      </div>
      <span className="text-md hover:text-blue-500 hover:cursor-none">
        Your Recent Courses
      </span>
      <div
        id="recent-courses"
        className="min-w-screen bg-gray-300 shadow-md grid grid-cols-2 gap-2 items-center  min-h-[70vh]"
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
