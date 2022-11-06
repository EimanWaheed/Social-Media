import React from "react";
import * as MuiIcons from "@material-ui/icons";

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
      <ul className="flex flex-col my-4 ml-4">
        {Object.keys(sidebarList).map((userIcon, index) => {
          const SelectedIcon = MuiIcons[userIcon];
          return (
            <li key={index} className="mb-6">
              <SelectedIcon />
              <span className="pl-4">{sidebarList[userIcon]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
