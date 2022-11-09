import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from "../components/feed/Feed";

export default function Homepage() {
  return (
    <>
      <Topbar />
      <div className="flex h-[calc(100vh-48px)]">
        <Sidebar className="w-1/3 overflow-scroll" />
        <Feed className="w-2/3" />
        <Rightbar className="w-1/3" />
      </div>
    </>
  );
}
