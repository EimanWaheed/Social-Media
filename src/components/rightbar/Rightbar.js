import React from "react";
import { Users } from "../../DummyData";
import User from "../users/User";
export default function Rightbar({ className }) {
  return (
    <div className={`${className} flex flex-col m-5`}>
      <div className="flex mb-8">
        <img className="h-12 w-14" src="assets/gift.png"></img>
        <span className="ml-2">
          <b>Abdullah Rizwan</b> and <b>69 other friends</b> have birthday
          today!
        </span>
      </div>

      {/* add picture */}
      <img
        className="rounded-xl object-cover mb-8 h-96"
        src="assets/ad.jpeg"
      ></img>

      {/* online friends list */}
      <div className="flex flex-col shadow-xl rounded-xl pl-2 h-96 overflow-scroll">
        <span className="text-lg font-bold mb-2">Online Friends</span>
        {Users.map((user) => {
          return (
            <li className="flex items-center mb-6">
              <User
                className="relative"
                userName={user.username}
                profilePicture={user.profilePicture}
                online="true"
              />
            </li>
          );
        })}
      </div>
    </div>
  );
}
