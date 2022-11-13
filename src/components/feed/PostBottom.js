import React from "react";

export default function PostBottom() {
  return (
    <div className="flex mt-4 mx-4 text-base mb-4">
      <div className="flex items-center gap-x-2">
        <img className="h-7 w-8" src="assets/heart.png"></img>
        <img className="h-7 w-8" src="assets/like.png"></img>
        <span>32 people like it</span>
      </div>
      <div className="ml-auto">
        <span className="cursor-pointer">9 comments</span>
      </div>
    </div>
  );
}
