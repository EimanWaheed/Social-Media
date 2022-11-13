import React from "react";
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
        <li className="flex items-center mb-6">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src="/assets/person/1.jpeg"
          ></img>
          <span className="text-base pl-2">Eiman Waheed</span>
        </li>
        <li className="flex items-center mb-6">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src="/assets/person/1.jpeg"
          ></img>
          <span className="text-base pl-2">Eiman Waheed</span>
        </li>
        <li className="flex items-center mb-6">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src="/assets/person/1.jpeg"
          ></img>
          <span className="text-base pl-2">Eiman Waheed</span>
        </li>
        <li className="flex items-center mb-6">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src="/assets/person/1.jpeg"
          ></img>
          <span className="text-base pl-2">Eiman Waheed</span>
        </li>
        <li className="flex items-center mb-6">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src="/assets/person/1.jpeg"
          ></img>
          <span className="text-base pl-2">Eiman Waheed</span>
        </li>
        <li className="flex items-center mb-6">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src="/assets/person/1.jpeg"
          ></img>
          <span className="text-base pl-2">Eiman Waheed</span>
        </li>
      </ul>
    </div>
  );
}
