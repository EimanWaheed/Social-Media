import React from "react";
import { Search } from "@material-ui/icons";

export default function SearchBar() {
  return (
    <div className="flex items-center w-1/2 mx-12 bg-white border-solid rounded-3xl">
      <Search className="mx-2 cursor-pointer"></Search>
      <input
        className="outline-none text-sm text-slate-400 w-2/3"
        placeholder="Search for friend, post or video..."
      />
    </div>
  );
}
