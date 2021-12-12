import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {


  return (
    <section className="flex flex-col items-center bg-black fixed w-full h-screen top-0 opacity-90 text-3xl pt-20 text-purple-500 lg:hidden" id={props.id} >
       <button className="hover:underline p-10 " onClick={props.onClick} > close</button>{" "}
      <Link to="/about" style={{ textDecoration: "none" }}>
        {" "}
        <button className="hover:underline p-10 "> About</button>{" "}
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        {" "}
        <button className="hover:underline p-10 "> Contact</button>{" "}
      </Link>
      <Link to="/project" style={{ textDecoration: "none" }}>
        {" "}
        <button className="hover:underline p-10 "> Projects</button>{" "}
      </Link>
  
    </section>
  );
};

export default Navbar;
