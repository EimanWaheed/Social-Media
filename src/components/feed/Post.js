import React from "react";
import PostTop from "./PostTop";
import PostCenter from "./PostCenter";
import PostBottom from "./PostBottom";
export default function Post({ className }) {
  return (
    <div className={className}>
      <PostTop />
      <PostCenter />
      <PostBottom />
    </div>
  );
}
