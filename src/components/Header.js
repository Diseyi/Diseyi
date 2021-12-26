import React from 'react'
import { Link } from 'react-router-dom'
import menu from '../assets/menu.png'
import Navbar from './Navbar'
import { useState } from 'react'

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <section className="flex justify-between w-4/5 m-auto pt-7  text-2xl items-center  ">
        <div className=" ">
          <Link to="/" style={{ textDecoration: 'none' }}>
            {' '}
            <h1 className=" font-bold text-purple-900 font-sans ">
              {' '}
              Diseyi
            </h1>{' '}
          </Link>
        </div>

        <div className=" lg:w-2/5 xl:w-1/4 hidden lg:flex lg:justify-between text-xl ">
          <a href="/about" className="hover:underline ">
            {' '}
            About
          </a>{' '}
          <a href="/work" className="hover:underline  ">
            {' '}
            Work{' '}
          </a>
          <a
            href="https://drive.google.com/file/d/1JV_xBQlCOHi2BaeUZcrvlA4fFU-ukwdp/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
            className="hover:underline "
          >
            {' '}
            Resume
          </a>
          <a
            href="https://hashnode.com/@Diseyi"
            rel="noreferrer"
            target="_blank"
            className="hover:underline text-1xl  "
          >
            {' '}
            Blog
          </a>{' '}
        </div>
        <div className=" lg:hidden">
          <img
            onClick={() => setShowSidebar(true)}
            src={menu}
            alt="menu"
            className="w-4/5"
          />
        </div>
      </section>
      <div className="">
        {showSidebar && <Navbar onClick={() => setShowSidebar(false)} />}
      </div>
    </>
  )
}

export default Header
