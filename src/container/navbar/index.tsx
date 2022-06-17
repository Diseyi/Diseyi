import { Link } from "solid-app-router";

const Navbar = (props) => {


  return (
    <section class="flex flex-col items-center bg-black fixed w-full h-screen hrefp-0 opacity-90 text-3xl pt-20 text-purple-500 lg:hidden" id={props.id} >
       <button class="hover:underline p-10 " onClick={props.onClick} > close</button>{" "}
       <Link href="/about" style={{ textDecoration: 'none'  }}>
       <p class="hover:underline p-10 ">
         About
          </p>
        </Link>
        <Link href="/work" style={{ textDecoration: 'none' }}>
        <p class="hover:underline p-10 ">
          Work 
          </p>
        </Link>
          <a
            href="https://drive.google.com/file/d/1JV_xBQlCOHi2BaeUZcrvlA4fFU-ukwdp/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
            class="hover:underline p-10 "
          >
            Resume
          </a>
          <a
            href="https://hashnode.com/@Diseyi"
            rel="noreferrer"
            target="_blank"
            class="hover:underline p-10  "
          >
            Blog
          </a>
  
    </section>
  );
};

export default Navbar;
