import { Link } from "solid-app-router";
import { createSignal } from "solid-js";
import menu from '../../assets/images/menu.png'
import Navbar from '../navbar';
import '../../App.css'

const Header = () => {
  const [showSidebar, setShowSidebar] = createSignal(false)

  return (
    <>
      <section class="flex m-auto justify-between w-4/5 m-auhref pt-7  text-2xl items-center  ">
        <div class=" ">
          <Link href="/" style={{ textDecoration: 'none' }}>
            {' '}
            <h1 class=" font-bold text-dark-green ">
              {' '}
              Diseyi
            </h1>{' '}
          </Link>
        </div>

        <div class=" lg:w-2/5 xl:w-1/4 hidden lg:flex lg:justify-between text-xl text ">
        <Link href="/about" style={{ textDecoration: 'none' }}>
            <div class="text-dark-green font-bold">About</div>
        </Link>
        <Link href="/work" style={{ textDecoration: 'none' }}>
        <div class="text-dark-green font-bold">Work</div>
        </Link>
          <a
            href="https://drive.google.com/file/d/1JV_xBQlCOHi2BaeUZcrvlA4fFU-ukwdp/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
            class="hover:underline text-dark-green font-bold "
          >
            {' '}
            Resume
          </a>
          <a
            href="https://hashnode.com/@Diseyi"
            rel="noreferrer"
            target="_blank"
            class="hover:underline text-xl text-dark-greentext-[#7cee2d] font-bold "
          >
            {' '}
            Blog
          </a>{' '}
        </div>
        <div class=" lg:hidden">
          <img
            onClick={() => setShowSidebar(true)}
            src={menu}
            alt="menu"
            class="w-4/5"
          />
        </div>
      </section>
      <div class="">
        {showSidebar && <Navbar onClick={() => setShowSidebar(false)} />}
      </div>
    </>
  )
}

export default Header
