import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-screen bg-white">
      <div className="w-[1200px] mx-auto py-2 flex justify-between">
        <h1 className="text-2xl font-bold text-slate-600">Blog Site</h1>
        <ul className="flex gap-4 items-center text-sm text-slate-600">
          <li>
            <input
              placeholder="Search"
              className="border border-slate-300 p-2 rounded-lg bg-transparent"
            />
          </li>
          <Link to="/">
            <li className=" ">Home</li>
          </Link>
          <Link to="/about">
            <li className=" ">About</li>
          </Link>
          <Link to="/categories">
            <li className=" ">Categories</li>
          </Link>
          <Link to="/create">
            <li className="border border-slate-300 bg-transparent  py-2 px-4 rounded-md hover:bg-slate-400 hover:text-slate-100">
              Blog
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar