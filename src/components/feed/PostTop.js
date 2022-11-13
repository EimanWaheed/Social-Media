import React from "react";
import { MoreVert } from "@material-ui/icons";

export default function PostTop() {
  return (
    <div className="flex items-center justify-left mt-4 mx-4">
      <img
        className="h-10 w-12 object-cover rounded-full"
        src="/assets/person/1.jpeg"
      ></img>
      <span className="text-base pl-2 font-medium">Eiman Waheed</span>
      <span className="text-xs pl-4 text-gray-500 pl-2 font-normal tracking-tight">
        5 mins ago
      </span>
      <div className="ml-auto">
        <MoreVert />
      </div>
    </div>
  );
}
