import React from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import Navbar from "./Navbar";
import {useState} from "react";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <section className="flex justify-between w-4/5 m-auto pt-7  text-2xl items-center  ">
        <div className=" " >
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <h1 className=" font-bold text-purple-900 font-sans "> Diseyi</h1>{" "}
        </Link>
        </div>
        
        <div className=" lg:w-2/5 xl:w-1/4 hidden lg:flex lg:justify-between text-xl ">
          <Link to="/about" style={{ textDecoration: "none" }}>
            {" "}
            <button className="hover:underline "> About</button>{" "}
          </Link>
          <Link to="/work" style={{ textDecoration: "none" }}>
            {" "}
            <button className="hover:underline  "> Work </button>{" "}
          </Link>
          <Link to="/resume" style={{ textDecoration: "none" }}>
            {" "}
            <button className="hover:underline "> Resume</button>{" "}
          </Link>
          <Link to="https://hashnode.com/@Diseyi" style={{ textDecoration: "none" }}>
            {" "}
            <button className="hover:underline text-1xl  "> Blog</button>{" "}
          </Link>
          {/* <button className="border-2 border-purple-500 rounded-xl p-2 pl-3 pr-3 bg-purple-500 text-white hover:backdrop-opacity-30  "> Project</button> */}
        </div>
        <div className=" lg:hidden">
          <img onClick={()=>setShowSidebar(true)} src={menu} alt="menu" className="w-4/5" />
        </div>
      </section>
      <div className="">
       {showSidebar && <Navbar onClick={()=>setShowSidebar(false)} />}
      </div>
    </>
  );
};

export default Header;
