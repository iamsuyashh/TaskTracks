"use client";

import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  

  const sumbithandler =(e:React.FormEvent)=>{
    e.preventDefault();
    console.log(title)
    console.log(desc)
    settitle("")
    setdesc("")
  }

  return (
    <>
      <h1 className="text-center text-2xl p-5 text-white outline-white-500 outline hover:outline-dashed">
        TaskTracks
      </h1>
      <form className="p-10" onSubmit={sumbithandler}>
        <div className="flex flex-col items-center justify-center my-10 p-10">
          <input
            type="text"
            placeholder="Enter a title..."
            className="w-half px-3 py-2 border rounded-md text-center"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter a Description..."
            className="w-half px-3 py-2 my-10 border rounded-md text-center"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default page;
