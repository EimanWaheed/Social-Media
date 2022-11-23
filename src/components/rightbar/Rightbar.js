import React from "react";
import { Users } from "../../DummyData";
import User from "../users/User";
export default function Rightbar({ className, homepageRenderFlag = null }) {
  return (
    <div className={`${className} flex flex-col m-5`}>
      {homepageRenderFlag ? (
        <>
          <div className="flex mb-8">
            <img className="h-12 w-14" src="assets/gift.png"></img>
            <span className="ml-2">
              <b>Abdullah Rizwan</b> and <b>69 other friends</b> have birthday
              today!
            </span>
          </div>
          <img
            className="rounded-xl object-cover mb-8 h-96"
            src="assets/ad.jpeg"
          ></img>
        </>
      ) : (
        <div className="flex flex-col mb-5">
          <span className="text-lg font-bold mb-2">User Information</span>
          <span>City: Lahore</span>
          <span>From: Pakistan</span>
          <span>Relationship: Single</span>
        </div>
      )}

      {/* online friends list */}
      {homepageRenderFlag ? (
        <div className="flex flex-col shadow-xl rounded-xl p-2 h-[calc(100%-525px)] overflow-scroll">
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
      ) : (
        <div className="flex flex-col">
          <span className="text-lg font-bold mb-2">User Friends</span>
          <div className="flex flex-wrap justify-between">
            {Users.map((user) => {
              return (
                <div className="flex flex-col w-32 mb-2 items-center">
                  <User
                    imgClassName="h-20 w-20"
                    userName={user.username}
                    profilePicture={user.profilePicture}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
