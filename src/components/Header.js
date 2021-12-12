import React from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import Navbar from "./Navbar";
import {useState} from "react";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <section className="flex justify-between w-4/5 m-auto pt-7 pb-10 text-2xl items-center  ">
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <h1 className="text-3xl text-purple-900"> Diseyi Philomena</h1>{" "}
        </Link>
        <div className=" lg:w-2/5 xl:w-1/4 hidden lg:flex lg:justify-between ">
          <Link to="/about" style={{ textDecoration: "none" }}>
            {" "}
            <button className="hover:underline "> About</button>{" "}
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            {" "}
            <button className="hover:underline "> Contact</button>{" "}
          </Link>
          <Link to="/project" style={{ textDecoration: "none" }}>
            {" "}
            <button className="hover:underline  "> Projects</button>{" "}
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
