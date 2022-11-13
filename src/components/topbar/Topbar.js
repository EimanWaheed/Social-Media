import React from "react";
import TopbarBadges from "./TopbarBadges";
import SearchBar from "./SearchBar";

export default function Topbar() {
  return (
    <div className="flex h-12 bg-blue-600 items-center">
      <h1 className="uppercase font-bold text-white mx-2">eimansocial</h1>
      <SearchBar />
      {/* Pages */}
      <div className="mx-8 text-white">
        <a className="pr-4" href="#">
          Homepage
        </a>
        <a className="pr-4" href="#">
          Timeline
        </a>
      </div>
      <div className="flex mx-8 text-white cursor-pointer">
        <TopbarBadges
          className="relative mr-4"
          iconClassName="absolute text-black bottom-4 text-sm items-center justify-center bg-orange-700 left-4 flex w-4 h-4 rounded-full"
        ></TopbarBadges>
      </div>
      <img
        class="ml-auto mr-4 h-10 w-12 object-cover rounded-full"
        src="/assets/person/1.jpeg"
      ></img>
    </div>
  );
}
