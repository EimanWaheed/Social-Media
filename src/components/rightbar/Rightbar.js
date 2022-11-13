import React from "react";

export default function Rightbar({ className }) {
  return (
    <div className={`${className} flex flex-col m-5`}>
      <div className="flex mb-8">
        <img className="h-12 w-14" src="assets/gift.png"></img>
        <span className="ml-2">
          <b>Abdullah Rizwan</b> and <b>69 other friends</b> have birthday
          today!
        </span>
      </div>

      {/* add picture */}
      <img className="rounded-xl object-cover mb-8" src="assets/ad.png"></img>

      {/* online friends list */}
      <div className="flex flex-col shadow-xl rounded-xl pl-2 h-fit">
        <span className="text-lg font-bold mb-2">Online Friends</span>
        <li className="flex items-center mb-6">
          <div className="relative">
            <img
              class="h-12 w-12 object-cover rounded-full"
              src="/assets/person/3.jpeg"
            ></img>
            <span className="absolute bg-lime-400 rounded-full h-3 w-3 bottom-9 left-9"></span>
          </div>
          <span class="text-base pl-2">Sana Waheed</span>
        </li>
        <li className="flex items-center mb-6">
          <div className="relative">
            <img
              class="h-12 w-12 object-cover rounded-full"
              src="/assets/person/3.jpeg"
            ></img>
            <span className="absolute bg-lime-400 rounded-full h-3 w-3 bottom-9 left-9"></span>
          </div>
          <span class="text-base pl-2">Sana Waheed</span>
        </li>
        <li className="flex items-center mb-6">
          <div className="relative">
            <img
              class="h-12 w-12 object-cover rounded-full"
              src="/assets/person/3.jpeg"
            ></img>
            <span className="absolute bg-lime-400 rounded-full h-3 w-3 bottom-9 left-9"></span>
          </div>
          <span class="text-base pl-2">Sana Waheed</span>
        </li>
        <li className="flex items-center mb-6">
          <div className="relative">
            <img
              class="h-12 w-12 object-cover rounded-full"
              src="/assets/person/3.jpeg"
            ></img>
            <span className="absolute bg-lime-400 rounded-full h-3 w-3 bottom-9 left-9"></span>
          </div>
          <span class="text-base pl-2">Sana Waheed</span>
        </li>
        <li className="flex items-center mb-6">
          <div className="relative">
            <img
              class="h-12 w-12 object-cover rounded-full"
              src="/assets/person/3.jpeg"
            ></img>
            <span className="absolute bg-lime-400 rounded-full h-3 w-3 bottom-9 left-9"></span>
          </div>
          <span class="text-base pl-2">Sana Waheed</span>
        </li>
      </div>
    </div>
  );
}
