import React from "react";

const Profile = () => {
  return (
    <div className="flex">
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
    </div>
  );
};

export default Profile;
