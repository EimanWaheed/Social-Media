import React from "react";
import * as MuiIcons from "@material-ui/icons";

export default function ShareBox({ className }) {
  const searchboxList = {
    InsertChart: "Photo or Video",
    Label: "Tag",
    LocationOn: "Location",
    EmojiEmotions: "Feelings",
  };
  const colorsList = {
    InsertChart: "crimson",
    Label: "blue",
    LocationOn: "green",
    EmojiEmotions: "DarkOrange",
  };
  return (
    <div className={className}>
      <div className="flex items-center justify-left mt-4 mx-4">
        <img
          className="h-12 w-12 object-cover rounded-full"
          src="/assets/person/1.jpeg"
        ></img>
        <input
          className="outline-none w-full cursor-pointer pl-4 text-gray-400 text-sm"
          placeholder="What's in your mind Eiman?"
        />
      </div>
      <hr class="m-5 h-px bg-gray-200 border-0 bg-gray-400" />
      <div className="flex mx-5 mb-7">
        {Object.keys(searchboxList).map((userIcon) => {
          const SelectedIcon = MuiIcons[userIcon];
          return (
            <div className="flex items-center px-4 mr-3.5">
              <SelectedIcon htmlColor={colorsList[userIcon]}></SelectedIcon>
              <span className="text-sm font-medium px-0.5 whitespace-nowrap">
                {searchboxList[userIcon]}
              </span>
            </div>
          );
        })}
        {/* Share button */}
        <div className="ml-auto">
          <button className="bg-green-600 px-3.5 py-2 rounded-md">Share</button>
        </div>
      </div>
    </div>
  );
}
