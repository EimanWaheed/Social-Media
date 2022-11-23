import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from "../components/feed/Feed";
import CoverContainer from "../components/profileContainer/CoverContainer";
import NameContainer from "../components/profileContainer/NameContainer";
export default function ProfilePage() {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar className="w-1/4 overflow-scroll h-[calc(100vh-48px)] sticky top-12" />
        <div className="flex flex-col w-3/4">
          <CoverContainer className="pt-12 mx-4 mb-20" />
          <NameContainer />
          <div className="flex">
            <Feed className="m-5 w-2/3" />
            <Rightbar className="w-1/3 h-fit" />
          </div>
        </div>
      </div>
    </>
  );
}
