import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-around px-2">
      <div className="flex flex-col p-3 space-y-2 divide-y-1 border-2 shadow-lg">
        <img
          className="w-40 h-40"
          src="https://cdn.codechef.com/sites/default/files/uploads/pictures/9add8f5b7067a81164b7a9116b1dcb79.jpg"
          alt=""
        />
        <span className="font-bold">Adityabhan Singh</span>
        <span className="text-gray-700">@bhannasa</span>
        <span className="font-bold">About</span>
        <p>
          <ul>
            <li>Sophomore, Nit Kurukshetra</li>
            <li>Heavy Developer</li>
            <li>Ex-Headboi (Mahesh Public School)</li>
          </ul>
        </p>
        <span className="italic text-gray-500">
          Expected year of Graduation: 2024
        </span>
      </div>
      <div id="about-column" className="flex flex-col w-3/4 space-y-3 p-4">
        <div className="p-3 shadow-xl">
          <span className="font-bold text-2xl">Verified Skills</span>
          <br />
          <p>
            <ul>
              <li>NodeJS</li>
              <li>React Js</li>
              <li>PHP</li>
              <li>Mongo DB</li>
            </ul>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
