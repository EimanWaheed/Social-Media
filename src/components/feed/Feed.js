import React from "react";
import ShareBox from "./ShareBox";
import Post from "./Post";

export default function Feed({ className }) {
  return (
    <div className={className}>
      <ShareBox className="h-fit m-4 flex flex-col box-content border rounded-xl shadow-xl border-solid border-white" />
      <Post className="h-fit m-4 flex flex-col box-content border rounded-xl shadow-xl border-solid border-white" />
    </div>
  );
}
