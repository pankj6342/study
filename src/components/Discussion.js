import React from "react";

const Discussion = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div id="ask-answer-input" className="flex flex-col">
        <div className="w-[90%] dp-input flex space-x-2">
          <div
            id="profile-pic"
            className="h-[40px] w-[40px] rounded-full bg-black"
          ></div>
          <input type="text" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Discussion;
