import React from "react";

export default function User({
  userName,
  profilePicture,
  imgClassName,
  className,
  online = false,
}) {
  return (
    <>
      <div className={className}>
        <img class={`object-cover ${imgClassName}`} src={profilePicture}></img>
        {online && (
          <span className="absolute bg-lime-400 rounded-full h-3 w-3 bottom-9 left-9"></span>
        )}
      </div>
      <span class="text-base pl-2 text-center">{userName}</span>
    </>
  );
}
