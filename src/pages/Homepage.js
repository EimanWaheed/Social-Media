import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from "../components/feed/Feed";

export default function Homepage() {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar className="w-1/3 overflow-scroll h-[calc(100vh-48px)] sticky top-12" />
        <Feed className="w-2/3 pt-10" />
        <Rightbar className="w-1/3 pt-10" />
      </div>
    </>
  );
}
