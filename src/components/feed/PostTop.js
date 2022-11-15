import React from "react";
import { MoreVert } from "@material-ui/icons";

export default function PostTop({ date, userName, profilePicture }) {
  return (
    <div className="flex items-center justify-left mt-4 mx-4">
      <img
        className="h-12 w-12 object-cover rounded-full"
        src={profilePicture}
      ></img>
      <span className="text-base pl-2 font-medium">{userName}</span>
      <span className="text-xs pl-4 text-gray-500 pl-2 font-normal tracking-tight">
        {date}
      </span>
      <div className="ml-auto">
        <MoreVert />
      </div>
    </div>
  );
}
