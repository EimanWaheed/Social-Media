import React from "react";

export default function RegisterPage() {
  return (
    <div className="flex bg-zinc-100 w-screen h-screen justify-center items-center">
      <div className="flex h-3/4 w-3/4">
        <div className="flex-1 justify-center flex-col flex">
          <h3 className="text-6xl font-bold text-blue-600">Eimansocial</h3>
          <span className="text-2xl pt-2">
            Connect with friends & family all around the globe!
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-center h-[600px] bg-white p-6 rounded">
          <input
            className="p-4 mb-2 border rounded-lg border-gray-500"
            placeholder="Username"
          ></input>
          <input
            className="p-4 mb-2 border rounded-lg border-gray-500"
            placeholder="Email"
          ></input>
          <input
            className="p-4 mb-2 border rounded-lg border-gray-500"
            placeholder="Password"
          ></input>
          <input
            className="p-4 mb-2 border rounded-lg border-gray-500"
            placeholder="Password Again"
          ></input>
          <button className="p-4 mb-2 border rounded-lg bg-blue-600 text-white text-xl font-medium">
            Signup
          </button>
          <button className="p-4 mx-14 border rounded-lg bg-lime-500 text-white text-xl font-medium">
            Log into Account
          </button>
        </div>
      </div>
    </div>
  );
}
