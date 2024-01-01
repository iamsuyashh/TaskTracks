"use client";

import React, {useEffect ,  useState } from "react";

interface Task {
  title: string;
  desc: string;
}

const Page: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    console.log("Saving tasks to localStorage...");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks([...tasks, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const handleDelete = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="bg-gray-800 text-white py-8 justfy-content-center">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl mb-6">TaskTracks</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-coloumn justify-between items-center mb-4">
              <div className="mb-4 md:mb-0 w-full md:w-1/2">
                <label htmlFor="title" className="block mb-2 text-lg">Title:</label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter a title..."
                  className="w-full px-3 py-2 border rounded-md text-center text-black"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="w-half md:w-1/2">
                <label htmlFor="desc" className="block mb-2 text-lg">Description:</label>
                <input
                  id="desc"
                  type="text"
                  placeholder="Enter a Description..."
                  className="w-full px-3 py-2 border rounded-md text-center text-black"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 md:mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-200 p-6 rounded-md">
          {tasks.length === 0 ? (
            <h2 className="text-center">No Tasks Available</h2>
          ) : (
            tasks.map((task, index) => (
              <div key={index} className="mb-4 flex justify-between items-center">
                <div>
                  <h2 className="text-xl">{task.title}</h2>
                  <p>{task.desc}</p>
                </div>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
