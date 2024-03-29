import React from "react";
import User from "../users/User";
import { Users } from "../../DummyData";
import * as MuiIcons from "@material-ui/icons";

/**
 * This component is responsible for displaying left side of homepage panel.
 * @param {className} string class name passed as props
 * @returns
 */
export default function Sidebar({ className }) {
  const sidebarList = {
    RssFeed: "Feed",
    Chat: "Chats",
    PlayCircleFilledOutlined: "Videos",
    Group: "Groups",
    Bookmark: "Bookmarks",
    HelpOutline: "Questions",
    WorkOutline: "Jobs",
    Event: "Events",
    School: "Courses",
  };
  return (
    <div className={className}>
      <ul className="flex flex-col my-4 ml-4 mr-4">
        {Object.keys(sidebarList).map((userIcon, index) => {
          const SelectedIcon = MuiIcons[userIcon];
          return (
            <li key={index} className="mb-6">
              <SelectedIcon />
              <span className="pl-4">{sidebarList[userIcon]}</span>
            </li>
          );
        })}
        <button className="bg-gray-300 p-3 rounded-xl w-2/3">Show more</button>
        <hr class="my-8 h-px bg-gray-200 border-0 bg-gray-300" />
        {/* Friends' list */}
        {Users.map((user) => {
          return (
            <li className="flex items-center mb-6">
              <User
                imgClassName="rounded-full h-12 w-12"
                userName={user.username}
                profilePicture={user.profilePicture}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
