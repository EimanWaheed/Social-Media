import React from "react";

export default function PostCenter({ desc, url }) {
  return (
    <div className="mx-4 mt-4">
      {desc && <span className="text-base">{desc}</span>}
      <img className="h-96 w-full object-cover mt-2" src={url}></img>
    </div>
  );
}
