import React from "react"
import { Link } from 'react-router-dom'

const Navbar = (props) => {


  return (
    <section className="flex flex-col items-center bg-black fixed w-full h-screen top-0 opacity-90 text-3xl pt-20 text-purple-500 lg:hidden" id={props.id} >
       <button className="hover:underline p-10 " onClick={props.onClick} > close</button>{" "}
       <Link to="/about" style={{ textDecoration: 'none'  }}>
       <p className="hover:underline p-10 ">
         About
          </p>
        </Link>
        <Link to="/work" style={{ textDecoration: 'none' }}>
        <p className="hover:underline p-10 ">
          Work 
          </p>
        </Link>
          <a
            href="https://drive.google.com/file/d/1JV_xBQlCOHi2BaeUZcrvlA4fFU-ukwdp/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
            className="hover:underline p-10 "
          >
            Resume
          </a>
          <a
            href="https://hashnode.com/@Diseyi"
            rel="noreferrer"
            target="_blank"
            className="hover:underline p-10  "
          >
            Blog
          </a>
  
    </section>
  );
};

export default Navbar;
