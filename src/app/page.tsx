"use client";
import React, { useState } from "react";

export default function Home() {
  // define state
  const [todos, setTodos] = useState([
    { item1: "Django Unchained", id: 1 },
    { item1: "Catch me if you can", id: 2 },
  ]);

  const [inputvalue, setInputvalue] = useState("");
  const [id, setId] = useState(0);

  //function

  const addItem = () => {
    let obj: any = todos.find((item) => item.id == id);

    if (obj) {
      let newArray = todos.filter((item) => item.id !== obj.id);
      setTodos([...newArray, { item1: inputvalue, id: id }]);
      setInputvalue("");
      setId(0);
      return;
    }
    setTodos([...todos, { item1: inputvalue, id: id }]);
    setInputvalue("");
    setId(0);
  };

  const editItem = (id: any) => {
    let obj: any = todos.find((item) => item.id == id);
    setInputvalue(obj.item1);
    setId(obj.id);
  };

  const delItem = (id: any) => {
    let newArray = todos.filter((item) => item.id !== id);
    setTodos([...newArray]);
  };

  return (
    // main div
    <div className="p-5 ">
      <header className="text-gray-600 body-font bg-slate-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">TODO APP</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">DashBoard</a>
            <a className="mr-5 hover:text-gray-900">Blog</a>
            <a className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-bold text-center text-[50px] underline">
          TODO APP{" "}
        </h1>

        {/* start input div */}
        <div className="flex ml-5 mt-5">
          <input
            className="w-[70%] border border-gray-500  mr-2 px-4 py-2 "
            type="text"
            value={inputvalue}
            placeholder="Enter a Todo Item"
            onChange={(event) => setInputvalue(event.target.value)}
          />
          <input
            className="w-[30%] border border-gray-500 mr-2 px-4 py-2  "
            type="number"
            value={id}
            onChange={(event: any) => setId(event.target.value)}
            placeholder="Enter Id"
          />
          <button
            onClick={addItem}
            className="bg-blue-500 hover:bg-blue-800 text-white fount-bold py-2 px-4 rounded "
          >
            Add Me
          </button>
        </div>
        {/* End input div */}

        {/* 2nd hading  */}
        <h1 className="text-bold text-center text-[50px] underline mt-5">
          Item List
        </h1>
        {/* end 2nd hading Item list */}

        {/* grid  Item  */}
        <div className="grid grid-cols-2  gab-4  mt-5">
          {todos.map((item: any, i: any) => {
            return (
              <div key={i} className="shadow p-4 ">
                <div className="flex flex-box justify-between text-lg  ">
                  <span className="shadow rounded-full h-8 w-8  text-center cursor-pointer ">
                    {i + 1}
                  </span>
                  <span
                    onClick={() => delItem(item.id)}
                    className="shadow rounded-full text-red-600  h-8 w-8 text-center cursor-pointer"
                  >
                    X
                  </span>
                </div>
                <div className="mt-5 text-[30px] text-gray-500">
                  {item.item1}
                </div>
                <div>
                  <h2
                    onClick={() => editItem(item.id)}
                    className="text-right cursor-pointer"
                  >
                    Edit
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        {/* end grid Item */}
      </div>
      <footer className="text-white body-font bg-slate-300 mt-4 ">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">TODO APP</span>
          </a>
          <p className="text-sm  text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Todo App —
            <a
              href="https://twitter.com/knyttneve"
              className="text-black ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
    // end main div
  );
}
