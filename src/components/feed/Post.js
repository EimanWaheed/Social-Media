import React from "react";
import PostTop from "./PostTop";
import PostCenter from "./PostCenter";
import PostBottom from "./PostBottom";
import { Posts, Users } from "../../DummyData";

export default function Post({ className }) {
  return Posts.map((post) => {
    return (
      <div className={className} key={post.id}>
        <PostTop
          date={post.date}
          userName={Users.filter((u) => u.id === post.userId)[0].username}
          profilePicture={
            Users.filter((u) => u.id === post.userId)[0].profilePicture
          }
        />
        <PostCenter desc={post.desc} url={post.photo} />
        <PostBottom like={post.like} comment={post.comment} />
      </div>
    );
  });
}
