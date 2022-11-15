import React, { useState } from "react";

export default function PostBottom({ like, comment }) {
  const [postLike, setLike] = useState(like);
  const postLikeHandler = () => {
    setLike(postLike + 1);
  };
  return (
    <div className="flex mt-4 mx-4 text-base mb-4">
      <div className="flex items-center gap-x-2">
        <img
          className="h-7 w-8 cursor-pointer"
          src="assets/heart.png"
          onClick={postLikeHandler}
        ></img>
        <img
          className="h-7 w-8 cursor-pointer"
          src="assets/like.png"
          onClick={postLikeHandler}
        ></img>
        <span>{postLike} people like it</span>
      </div>
      <div className="ml-auto">
        <span className="cursor-pointer">{comment} comments</span>
      </div>
    </div>
  );
}
