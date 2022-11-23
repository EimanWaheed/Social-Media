import React from "react";

export default function CoverContainer({ className }) {
  return (
    <div className={`${className} relative`}>
      <img className="h-80 w-full object-cover" src="/assets/post/1.jpeg"></img>
      <img
        className="absolute left-1/2 -ml-20 -bottom-20 rounded-full border-2 h-40 w-40"
        src="/assets/person/1.jpeg"
      ></img>
    </div>
  );
}
